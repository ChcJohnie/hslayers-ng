define(['angular', 'map', 'core', 'angular-ui-grid', 'ows.wfs'],

    function(angular) {
        angular.module('hs.attrtable', ['hs.map', 'hs.core','ui.grid','ui.grid.edit','ui.grid.resizeColumns','ui.grid.selection', 'ui.grid.pagination' ,'ui.grid.cellNav' ,'hs.ows.wfs'])
            
            .directive('hs.attrtable.directive', function() {
                return {
                    templateUrl: hsl_path + 'components/attrtable/partials/attrtable.html?bust=' + gitsha
                };
            })
        
        .directive('hs.attrtable.sizeDirective', function($window){
            return{
                link: function(scope,element,attrs) {
                    var changeSize = function() {
                        element.css('height', $window.innerHeight - 45 + 'px');
                        scope.$emit('tableResized', $window.innerHeight - 45);
                    }
                    
                    angular.element($window).bind('resize', function(){
                        changeSize();    
                    });
                    
                    changeSize();
                }
            }
        })

         .controller('hs.attrtable.controller', ['$scope','$rootScope', '$compile','$timeout','$interval','hs.map.service','hs.map.selectionService', 'Core', 'uiGridConstants','hs.ows.wfs.transaction',
            function($scope,$rootScope, $compile, $timeout, $interval, OlMap, Selection, Core, uiGridConstants,wfsTransaction) {

                $scope.currentLayer = "";
                
                $scope.tableChanged = false;
                $scope.changes = [];
                
                var selectCounter = 0;
                var tableRows = 0;
                $scope.paginationAuto = true;
                
                $scope.tableOptions = {
                    enableSorting: true,
                    paginationPageSize: 29,
                    paginationPageSizes: [25, 50, 100, 200],
                    enableCellEditOnFocus: true,
                    onRegisterApi: function( gridApi ) {
                        $scope.tableApi = gridApi;
                        
                        $interval( function() {
                            $scope.tableApi.core.handleWindowResize();
                          }, 200);
                        
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
                        gridApi.pagination.on.paginationChanged($scope, function(cp, ps){
                            if (ps > tableRows) $scope.paginationAuto = false;   
                        });
                    }
                };
                
                $scope.closeTable = function(tablePanel) {
                    if (Core.oldpanel) {
                        Core.setMainPanel(Core.oldpanel);
                    }
                    else {
                        Core.closePanel(tablePanel);    
                    }
                }
                
                $scope.loadTable = function(layer) {
                    $scope.loadLayer(layer);
                    $timeout(loadSelection,100);
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
                        $scope.tableHead.push({field: key, minWidth: "100", width: "100"});
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
                    $scope.tableApi.core.queueGridRefresh();
                    
                }
                
                function resizeColumn(uid) {
                    // document.querySelector might not be supported; if you have jQuery
                    // in your project, it might be wise to use that for selecting this
                    // element instead
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
                
                $scope.$on('tableResized', function(event, height){
                    var avaiHeight = height - 75;
                    var rowPlaces = parseInt(avaiHeight / 30);
                    tableRows = rowPlaces;
                    if ($scope.paginationAuto == true) $scope.tableOptions.paginationPageSize = rowPlaces;
                    
                    var columns = $scope.tableApi.grid.columns;
                    for(var i = 0; i < columns.length; i++) {
                        resizeColumn(columns[i].uid);
                    }
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

                $scope.$emit('scope_loaded', "Attribute table");
        }
    ]);

})
