define(['angular', 'map', 'core'],

    function(angular) {
        angular.module('hs.workflow', ['hs.map', 'hs.core'])
            
            .directive('hs.workflow.directive', function() {
                return {
                    templateUrl: hsl_path + 'components/workflow/partials/workflow.html?bust=' + gitsha
                };
            })
        .service('hs.workflow.initService', ['$rootScope', 'hs.map.service', 'config', 
                function($rootScope, OlMap, config) {
                    var me = {
                        
                    };
                    return me;
                }
            ])
         .controller('hs.workflow.controller', ['$scope', '$compile','hs.map.service','hs.map.selectionService', 'hs.workflow.initService', 'Core', 
            function($scope, $compile, OlMap, Selection, WorkflowService, Core) {
                
                $scope.workflowTitle = "Foodie computer";
                
                $scope.flows = [
                    {
                        title: "Data selection",
                        id: "1",
                        tooltip: "Select datasource used in procces",
                        allow: true
                    },
                    {
                        title: "Plots and dosing",
                        id: "2",
                        tooltip: "Select plots and pick fertilizer dosing",
                        allow: false
                    },
                    {
                        title: "Maybe see",
                        id: "2.b",
                        tooltip: "You should see this yet",
                        hidden: true,
                        allow: false
                    },
                    {
                        title: "Results",
                        id: "3",
                        tooltips: "See results, export",
                        allow: false
                    }
                ];

                $scope.activePage = $scope.flows[0];
                
                $scope.isActive = function(index) {
                    return $scope.activePage == $scope.flows[index];
                };
                
                $scope.setActive = function(index) {
                    for (var i=0; i < $scope.flows.length; i++) { 
                        if ($scope.flows[i].allow == false && i == index) return false;
                    }
                    $scope.activePage = $scope.flows[index];
                    return true;
                };
                
                $scope.getIndex = function(property, value) {
                    for (var i=0; i < $scope.flows.length; i++) {
                        if ($scope.flows[i][property] == value) return i;
                    }
                }
                
                $scope.changeProperty = function(property, value, index) {
                    $scope.flows[index][property] = value;
                }
                
                $scope.nextPage = function(curIndex) {
                    for (var i = curIndex + 1; i < $scope.flows.length; i++) {
                        if ($scope.setActive(i) == true) return true;
                    }
                    return false;
                }
                
                $scope.pageChecker = function(page) {
                    switch (page) {
                        case "1":
                            if ($scope.wfData.layers.lpisLayer) $scope.changeProperty('allow',true,$scope.getIndex('id','1') + 1);
                            else $scope.changeProperty('allow',false,$scope.getIndex('id','1') + 1);
                            break;
                    };
                }
                
                $scope.blockChecker = function(block) {
                    
                }
                
                $scope.createPlotLayer = function() {
                    var layer;
                    for (var i = 0; i < $scope.availableLayers.length; i++) {
                        if ($scope.availableLayers[i].title == $scope.wfData.layers.lpisLayer) layer = $scope.availableLayers[i].layer;
                    }
                    var source = layer.getSource();
                    var selected = Selection.selectedFeatures();
                    var features = [];
                    for (var i = 0; i < selected.length; i++) {
                        features.push(source.getFeatureById(selected[i]));
                    }
                    var plotLayer = new ol.layer.Vector({
                        title: "Plot layer",
                        source: new ol.source.Vector
                    });
                    plotLayer.getSource().addFeatures(features);
                    features = plotLayer.getSource().getFeatures();
                    for (var i = 0; i < features.length; i++) {
                        features[i].getKeys().forEach(function(key){
                            console.log(key);
                            if (["FLIK","SURFACE","geometry"].indexOf(key) == -1) features[i].unset(key);
                        })
                        features[i].set("fertilizer");
                        features[i].set("rate");
                    }
                    OlMap.map.addLayer(plotLayer);
                    
                };
                
                $scope.sendJson = function() {
                    var writer = new ol.format.GeoJSON();
                    var geojsonStr = writer.writeFeatures(OlMap.findLayerByTitle('Plot layer').getSource().getFeatures());
                    
                }
                
                $scope.wfData = {};
    
                $scope.$on('core.mainpanel_changed', function(event){
                    if (Core.mainpanel != "workflow") return;
                    $scope.availableLayers = hslayers_api.gui.LayerManager.layers;
                });
                
                //Change events, mapSelection always!!! send flag with it
                $scope.$on('mapSelectionChanged', function(event,data) {
                    if (Selection.selectedFeatures().length > 0) {
                        $scope.wfData.lpisSelected = true;
                        $scope.wfData.lpisSelectedNumber = Selection.selectedFeatures().length;
                    }
                    else $scope.wfData.lpisSelected = false;
                });
                
                $scope.$emit('scope_loaded', "Workflow list");
        }
    ]);

})
