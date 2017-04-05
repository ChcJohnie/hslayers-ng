define(['angular', 'map', 'core', 'angular-ui-grid', 'ows.wfs'],

    function(angular) {
        angular.module('hs.attrtable', ['hs.map', 'hs.core','ui.grid','ui.grid.edit','ui.grid.resizeColumns','ui.grid.selection','hs.ows.wfs'])
            
            .directive('hs.attrtable.directive', function() {
                return {
                    templateUrl: hsl_path + 'components/attrtable/partials/attrtable.html?bust=' + gitsha
                };
            })
            
         .service('hs.attrtable.service', ['$rootScope',
            function($rootScope) {
                var me = this;
                
                
                
                $rootScope.$on('tableOpened', function(event, layer){
                    console.log(layer);    
                });
                }
            ])
         .controller('hs.attrtable.controller', ['$scope', '$compile','$timeout','hs.map.service','hs.map.selectionService', 'hs.attrtable.service', 'Core', 'uiGridConstants','hs.ows.wfs.transaction',
            function($scope, $compile, $timeout, OlMap, Selection, TableService, Core, uiGridConstants,wfsTransaction) {

                $scope.currentLayer = "";
                
                $scope.tableChanged = false;
                $scope.changes = [];
                
                var selectCounter = 0;
                
                $scope.tableOptions = {
                    enableSorting: true,
                    onRegisterApi: function( gridApi ) {
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
                };
                
                $scope.closeTable = function(tablePanel) {
                    if (Core.oldpanel) {
                        Core.setMainPanel(Core.oldpanel);
                    }
                    else {
                        Core.closePanel(tablePanel);    
                    }
                }
                
                $scope.testLoad = function(layer) {
                    $scope.loadLayer(layer);
                    $timeout(loadSelection,100);
                }
                
                $scope.loadLayer = function(loadedLayer) {
                    var layer;
                    OlMap.map.getLayers().forEach(function (lyr) {
                        if (loadedLayer == lyr.get('title')) {
                            layer = lyr;
                        }            
                    });
                    var features = layer.getSource().getFeatures();
                    $scope.tableHead = [];
                    $scope.tableBody = [];
                    $scope.currentLayer = layer.get('title');
                    features.forEach(function(feature){
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
                    for (var key in features[0].getProperties()){
                        if (key == "geometry") continue;
                        $scope.tableHead.push({field: key, width: "*"});
                    } 
                    
                    $scope.tableOptions.data = $scope.tableBody;
                    $scope.tableOptions.columnDefs = $scope.tableHead;
                    $scope.tableApi.core.queueGridRefresh();
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
