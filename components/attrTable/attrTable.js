define(['angular', 'map', 'core', 'angular-smart-table'],

    function(angular) {
        angular.module('hs.attrtable', ['hs.map', 'hs.core','smart-table'])
            
            .directive('hs.attrtable.directive', function() {
                return {
                    templateUrl: hsl_path + 'components/attrtable/partials/attrtable.html?bust=' + gitsha
                };
            })
        
        .directive('csSelect', function () {
            return {
                require: '^stTable',
                scope: {
                    row: '=csSelect'
                },
                link: function (scope, element, attr, ctrl) {

                    element.bind('click', function (evt) {
                        scope.$apply(function () {
                            ctrl.select(scope.row, 'multiple');
                        });
                        var eventObject = {
                            "layer": scope.row["layer"],
                            "featureId": scope.row["ol_id"],
                            "added": scope.row.isSelected
                        };
                        scope.$emit("tableSelectionChanged",eventObject);
                    });

                    scope.$on("mapSelectionChanged", function(event,data){
                        if (scope.row["ol_id"] == data["feature"]) {
                            ctrl.select(scope.row, 'multiple');
                            if (scope.row.isSelected) {
                                element.addClass('st-selected');
                            } else {
                                element.removeClass('st-selected');
                            } 
                        }
                    })
                    
                    scope.$watch('row.isSelected', function (newValue, oldValue) {
                        if (newValue === true) {
                            element.addClass('st-selected');
                        } else {
                            element.removeClass('st-selected');
                        }
                    });
                }
            };
        })
        
         .service('hs.attrtable.service', function() {

                }
            )
         .controller('hs.attrtable.controller', ['$scope', '$compile','hs.map.service','hs.map.selectionService', 'hs.attrtable.service', 'Core',
            function($scope, $compile, OlMap,Selection, TableService, Core) {
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
                    var currentlySelected = Selection.selectedFeatures();
                    features.forEach(function(feature){
                        var properties = feature.getProperties();
                        var fProperties = {};
                        for (var key in properties) {
                            if (!properties.hasOwnProperty(key)) continue;
                            if (key == "geometry") continue;
                            if ($scope.tableHead.indexOf(key) == -1) $scope.tableHead.push(key);
                            fProperties[key] = properties[key];
                        }
                        fProperties["ol_id"] = feature.getId();
                        fProperties["layer"] = $scope.currentLayer;
                        if (currentlySelected.indexOf(fProperties["ol_id"]) > -1) fProperties.isSelected = true;
                        $scope.tableBody.push(fProperties);
                    });
                }

                $scope.$on('core.mainpanel_changed', function(event) {
                    if (Core.mainpanel == 'attrtable') {
                        Core.sidebarWide = true;
                    }
                });

                $scope.$emit('scope_loaded', "Attribute table");
        }
    ]);

})
