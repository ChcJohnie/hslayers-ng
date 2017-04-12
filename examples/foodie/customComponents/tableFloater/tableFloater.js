define(['angular', 'map', 'core', 'angular-ui-grid'],

    function(angular) {
        angular.module('tablefloater', ['hs.map', 'hs.core', 'ui.grid','ui.grid.edit','ui.grid.selection','ui.grid.cellNav', 'ui.grid.autoResize'])
            
            .directive('tablefloater', function() {
                return {
                    templateUrl: 'customComponents/tableFloater/tableFloater.html?bust=' + gitsha
                };
            })
         .controller('tablefloaterctrl', ['$rootScope','$scope', '$compile','hs.map.service', 'Core','uiGridConstants', 
            function($rootScope, $scope, $compile, OlMap, Core, uiGridConstants) {
                
                $scope.tableOpened = false;
                
                $scope.currentLayer = "";
                
                $scope.tableChanged = false;
                $scope.changes = [];
                var focused;
                var layer;
                
                var style = new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: "rgba(108, 184, 222, 0.34)",
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#430043',
                        width: 2
                    })
                });
                
                var focusStyle = new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: "rgba(108, 184, 222, 0.34)",
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#ff7601',
                        width: 2
                    })
                });
                    
                var tableOptions = {
                    columnDefs: [
                        {field: 'flik', enableCellEdit: false, enableCellEditOnFocus:false, allowCellFocus: false, width: "80"},
                        {field: 'surface', displayName: 'Area(ha)', enableCellEdit: false,enableCellEditOnFocus:false, allowCellFocus: false, width: "80", cellClass: "grid-right"},
                        {field: 'rate', displayName: 'St. rate(kg/ha)',
                            cellClass: function(grid, row, col, rowRenderIndex, colRenderIndex) {
                                if (grid.getCellValue(row,col) == undefined || grid.getCellValue(row,col) == '') {
                                    return 'rate-unknown';
                                }
                                else return 'rate-known';
                            
                            }
                        }
                    ],
                    enableSorting: true,
                    enableColumnMenus: false,
                    enableCellEditOnFocus: true,
                    enableCellEdit: true,
                    enableRowSelection : true,
                    enableRowHeaderSelection: false,
                    multiSelect: false,
                    enableVerticalScrollbar: uiGridConstants.scrollbars.NEVER,
                    enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
                    onRegisterApi: function( gridApi ) {
                        $scope.tableApi = gridApi;  
                        
                        gridApi.edit.on.beginCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {
                            gridApi.selection.selectRow(rowEntity);
                            focusOnMap(rowEntity["ol_id"]);
                        });
                        gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
                            gridApi.selection.clearSelectedRows();
                            deFocus(rowEntity["ol_id"]);
                            saveChange(rowEntity["ol_id"],colDef.name,newValue);
                        });
                        
                        gridApi.edit.on.cancelCellEdit($scope, function(rowEntity, colDef){
                            gridApi.selection.clearSelectedRows();
                            deFocus(rowEntity["ol_id"]);
                        });
                        
                    }
                };
                
                function focusOnMap(id) {
                    var feature = layer.getSource().getFeatureById(id);
                    feature.setStyle(focusStyle);
                    var center = calculateCenter(feature.getGeometry().getExtent());
                    OlMap.map.getView().setCenter(center);
                }
                
                function deFocus(id) {
                    var feature = layer.getSource().getFeatureById(id);
                    feature.setStyle(style);
                }
                
                function calculateCenter(extent) {
                    var X = extent[0] + (extent[2]-extent[0])/2;
                    var Y = extent[1] + (extent[3]-extent[1])/2;
                    return [X, Y];
                }
                
                $scope.tableOptions = tableOptions;
                
                $scope.loadTable = function(layer) {
                    $scope.loadLayer(layer);
                    $scope.tableApi.core.refresh();
                }
                
                $scope.loadLayer = function(loadedLayer) {
                    //debugger;
                    layer = loadedLayer;
                    //console.log(loadedLayer);
                    $scope.tableBody = [];
                    $scope.currentLayer = layer.get('title');
                    var height = 35 + (layer.getSource().getFeatures().length * 30);
                    $(".myGrid").height(height);
                    $("#table-floater").height(height + 43);
                    layer.getSource().getFeatures().forEach(function(feature){
                        var properties = feature.getProperties();
                        var fProperties = {};
                        for (var key in properties) {
                            if (!properties.hasOwnProperty(key)) continue;
                            if (key == "geometry") continue;
                            fProperties[key] = properties[key];
                        }
                        fProperties["ol_id"] = feature.getId();
                        $scope.tableBody.push(fProperties);
                    });                    
                    $scope.tableOptions.data = $scope.tableBody;
                }
                
                function saveChange(id, attribute, value) {
                    var feature = layer.getSource().getFeatureById(id);
                    feature.set(attribute,value);
                    $rootScope.$broadcast('plotUpdated');
                };
                            
                $rootScope.$on('tableOpened', function(event, layer){
                    $scope.loadTable(layer);
                    $scope.tableOpened = true;
                });
                $rootScope.$on('tableClosed', function(e){
                    $scope.tableOpened = false;    
                });
                
                $scope.$emit('scope_loaded', "tableFloater");
        }
    ]);

})