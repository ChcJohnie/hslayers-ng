define(['angular', 'map', 'core'],

    function(angular) {
        angular.module('hs.attrtable', ['hs.map', 'hs.core'])
            
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
                
                $scope.closeTable = function(tablePanel) {
                    if (Core.oldpanel) {
                        Core.setMainPanel(Core.oldpanel);
                    }
                    else {
                        Core.closePanel(tablePanel);    
                    }
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
