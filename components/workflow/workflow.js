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
                        fields: [
                            {
                                title: "LPIS",
                                type: "layer",
                                default: "none"
                            },
                            {
                                title: "Dose",
                                type: "constant",
                                default: 12
                            }
                        ],
                        options: [
                            {
                                title: "Next",
                                type: "nextPage"
                            },
                            {
                                title: "Revert",
                                type: ["deleteTrack","defaultValues"]
                            }
                        ]
                    },
                    {
                        title: "Recomputation",
                        fields: [
                            {
                                title: "Counties",
                                type: "response",
                                default: "none"
                            },
                            {
                                title: "Dosage",
                                type: "constant",
                                default: "100%"
                            }
                        ],
                        options: [
                            {
                                title: "Next",
                                type: "nextPage"
                            },
                            {
                                title: "Revert",
                                type: ["deleteTrack","defaultValues"]
                            }
                        ]
                    },
                    {
                        title: "Final data",
                        fields: [
                            {
                                title: "Výnos",
                                type: "response",
                                default: "none"
                            }
                        ],
                        options: [
                            {
                                title: "Finish",
                                type: "final"
                            }
                        ]
                    }
                ];

                $scope.$emit('scope_loaded', "Workflow list");
        }
    ]);

})
