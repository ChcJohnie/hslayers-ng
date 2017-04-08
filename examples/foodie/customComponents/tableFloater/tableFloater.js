define(['angular', 'map', 'core', 'angular-ui-grid'],

    function(angular) {
        angular.module('tablefloater', ['hs.map', 'hs.core', 'ui.grid','ui.grid.edit','ui.grid.resizeColumns','ui.grid.selection', 'ui.grid.pagination' ,'ui.grid.cellNav'])
            
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
                
                $scope.isSelected = false;
                $scope.selectedFiltered = false;
                
                var selectCounter = 0;                
                
                var defaultOptions = {
                    enableSorting: true,
                    paginationPageSize: 25,
                    paginationPageSizes: [25, 50, 100, 200, 500],
                    enableCellEditOnFocus: false,
                    enableCellEdit: false,
                    onRegisterApi: tableApi
                };
                
                var plotOptions = {
                    enableSorting: true,
                    paginationPageSize: 25,
                    paginationPageSizes: [25, 50, 100, 200, 500],
                    enableCellEditOnFocus: true,
                    enableCellEdit: true,
                    onRegisterApi: tableApi
                }
                
                var tableApi = function( gridApi ) {
                    $scope.tableApi = gridApi;
                        
                    gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
                        if (newValue == oldValue) return;
                        if (!$scope.tableChanged) $scope.tableChanged = true;
                        var change = {};
                        change.feature = rowEntity["ol_id"];
                        change.attribute = colDef.name;
                        change.value = newValue;
                        $scope.changes.push(change);
                    });
                    gridApi.selection.on.rowSelectionChanged($scope, function(row){
                        var currentSelection = $scope.tableApi.selection.getSelectedRows();
                        if (currentSelection.length > 0) $scope.isSelected = true;
                        else $scope.isSelected = false;
                        if (selectCounter != 0) {
                            selectCounter--;
                            return;
                        }
                        var event = {
                            added: row.isSelected,
                            layer: $scope.currentLayer,
                            featureId: row.entity.ol_id
                        };
                        $scope.$emit('tableSelectionChanged',event);
                     });
                }
                
                $scope.tableOptions = defaultOptions;
                
                $scope.closeTable = function(tablePanel) {
                    if (Core.oldpanel) {
                        Core.setMainPanel(Core.oldpanel);
                    }
                    else {
                        Core.closePanel(tablePanel);    
                    }
                }
                
                $scope.loadTable = function(layer) {
                    if (layer.title="Selected plots") {
                        $scope.tableOptions = plotOptions;
                    }
                    else {
                        $scope.tableOptions = defaultOptions;
                    }
                    $scope.loadLayer(layer);
                    resizeColumn();
                    loadSelection();
                }
                
                $scope.loadLayer = function(loadedLayer) {
                    var layer;
                    if (loadedLayer instanceof ol.layer.Vector) {
                        layer =loadedLayer;
                    }
                    else {
                        OlMap.map.getLayers().forEach(function (lyr) {
                            if (loadedLayer == lyr.get('title')) {
                                layer = lyr;
                            }            
                        });
                    }                    
                    $scope.tableHead = [];
                    $scope.tableBody = [];
                    $scope.currentLayer = layer.get('title');
                    layer.getSource().getFeatures().forEach(function(feature){
                        var properties = feature.getProperties();
                        var fProperties = {};
                        for (var key in properties) {
                            if (!properties.hasOwnProperty(key)) continue;
                            if (key == "geometry") continue;
                            fProperties[key] = properties[key];
                        }
                        fProperties["ol_id"] = feature.getId();
                        fProperties["layer"] = $scope.currentLayer;
                        $scope.tableBody.push(fProperties);
                    });
                    for (var key in layer.getSource().getFeatures()[0].getProperties()){
                        if (key == "geometry") continue;
                        $scope.tableHead.push({field: key, width: "100"});
                    } 
                    
                    $scope.tableOptions.data = $scope.tableBody;
                    $scope.tableOptions.columnDefs = $scope.tableHead;
                }
                
                var loadSelection = function() {
                    var preSelected = Selection.selectedFeatures();
                    preSelected.forEach(function(selected){
                        for (var i = 0; i < $scope.tableOptions.data.length; i++) {
                            if ($scope.tableOptions.data[i].ol_id == selected) {
                                selectCounter++;
                                $scope.tableApi.selection.toggleRowSelection($scope.tableOptions.data[i]);
                                return;
                            }
                        }    
                    });
                    console.log($scope.tableApi);
                    $scope.tableApi.core.queueGridRefresh();
                    
                }
                
                function resizeColumn(uid) {
                    var resizer = document.querySelector('.ui-grid-col' + uid + ' .ui-grid-column-resizer.right');
                    angular.element(resizer).triggerHandler('dblclick');
                }
                
                $scope.saveChanges = function(){
                    var layer = OlMap.findLayerByTitle($scope.currentLayer);
                    var source = layer.getSource();
                    $scope.changes.forEach(function(change){
                        var feature = source.getFeatureById(change.feature);
                        var pair = {};
                        pair[change.attribute] = change.value;
                        feature.setProperties(pair);
                    });
                    
                    if (angular.isDefined(source.defOptions) && source.defOptions.layerType == "WFS") {
                        var features = [];
                        $scope.changes.forEach(function(change){
                            var feature = source.getFeatureById(change.feature);
                            var clone = new ol.Feature(feature.getProperties());
                            clone.setId(feature.getId());
                            clone.set("the_geom",feature.getGeometry());
                            clone.setGeometryName("the_geom");
                            clone.unset("geometry");
                            features.push(clone);    
                        });
                        wfsTransaction.transactWFS(source.defOptions,'update', features);
                        
                    }
                    $scope.tableChanged = false;
                    $scope.changes = [];
                };
                
                $rootScope.$on('tableOpened', function(event, layer){
                    $scope.loadTable(layer);
                });
                
                
                $scope.$on('mapSelectionChanged', function(event,data) {
                    if (Core.mainpanel != 'attrtable') return;
                    for (var i = 0; i < $scope.tableOptions.data.length; i++) {
                        if ($scope.tableOptions.data[i].ol_id == data.featureId) {
                            selectCounter++;
                            $scope.tableApi.selection.toggleRowSelection($scope.tableOptions.data[i]);
                            $scope.tableApi.core.queueGridRefresh();
                            return;
                        }
                    }
                });
                
                $scope.$on('core.mainpanel_changed', function(event) {
                    if (Core.mainpanel == 'attrtable') {
                        Core.sidebarWide = true;
                    }
                });
                
                $scope.$emit('scope_loaded', "tableFloater");
        }
    ]);

})