define(['angular', 'map', 'core', 'angular-smart-table'],

    function(angular) {
        angular.module('hs.attrtable', ['hs.map', 'hs.core','smart-table'])
            
            .directive('hs.attrtable.directive', function() {
                return {
                    templateUrl: hsl_path + 'components/attrtable/partials/attrtable.html?bust=' + gitsha
                };
            })
        
         .service('hs.attrtable.service', function() {

                }
            )
         .controller('hs.attrtable.controller', ['$scope', '$compile','hs.map.service', 'hs.attrtable.service', 'Core', 
            function($scope, $compile, OlMap, TableService, Core) {
                $scope.tableHead = [];
                $scope.tableBody = [];
                $scope.itemsByPage = 10;
                $scope.currentLayer = "";
                
                $scope.closeTable = function(tablePanel) {
                    if (Core.oldpanel) {
                        Core.setMainPanel(Core.oldpanel);
                    }
                    else {
                        Core.closePanel(tablePanel);    
                    }
                }
                
                $scope.testLoad = function(loadedLayer) {
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
                    checkIDs(features,layer.get('title'));
                    features.forEach(function(feature){
                        var properties = feature.getProperties();
                        properties["ol_id"] = feature.getId();
                        var fProperties = {};
                        for (var key in properties) {
                            if (!properties.hasOwnProperty(key)) continue;
                            if ($scope.tableHead.indexOf(key) == -1 && key != "geometry" && key != "ol_id") $scope.tableHead.push(key);
                            fProperties[key] = properties[key];
                        }
                        $scope.tableBody.push(fProperties);
                    });
                }
                
                $scope.selectAction = function(feature) {
                    var event = {};
                    event["layer"] = $scope.currentLayer;
                    event["feature"] = feature["ol_id"];
                    if (feature.isSelected) {
                        $scope.$emit("tableFeatureAdded",event);
                    }
                    else {
                        $scope.$emit("tableFeatureRemoved",event);
                    }
                    
                }
                
                $scope.$on("selectionAdded",function(event,id) {
                    $scope.tableBody.forEach(function(feature){
                        if (feature["ol_id"] == id) {
                            feature.isSelected = true;
                            if ($scope.$$phase) $scope.$digest;
                            return;
                        }    
                    });   
                });
                
                $scope.$on('core.mainpanel_changed', function(event) {
                    if (Core.mainpanel == 'attrtable') {
                        Core.sidebarWide = true;
                    }
                });

                $scope.$emit('scope_loaded', "Attribute table");
                
                function checkIDs(features,lyrTitle) {
                    var counter = 1;
                    features.forEach(function(feature){
                        if (feature.getId() == undefined) {
                            feature.setId(lyrTitle + counter);
                            counter++;
                        }    
                    });
                }
        }
    ]);

})
