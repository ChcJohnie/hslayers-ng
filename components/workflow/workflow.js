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
         .controller('hs.workflow.controller', ['$scope', '$compile','hs.map.service', 'hs.workflow.initService', 'Core', 
            function($scope, $compile, OlMap, WorkflowService, Core) {
                
                $scope.workflowTitle = "Foodie computer";
                
                $scope.flows = [
                    {
                        title: "Data collection",
                        index: "1",
                        tooltip: "Select datasource which should be accounted in compution",
                        allow: true
                    },
                    {
                        title: "Recomputation",
                        index: "2",
                        tooltip: "Change parameters and start proccesing",
                        allow: true
                    },
                    {
                        title: "Maybe see",
                        index: "2.b",
                        tooltip: "You should see this yet",
                        hidden: true,
                        allow: false
                    },
                    {
                        title: "Results",
                        index: "3",
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
                
                $scope.wfData = {};
    
                $scope.avaiLayers = ["LPIS","WaterZones","kraje"];
                
                $scope.$emit('scope_loaded', "Workflow list");
        }
    ]);

})
