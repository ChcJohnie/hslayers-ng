define(['angular', 'ol', 'map', 'core'],

    function(angular, ol) {
        angular.module('hs.attrTable', ['hs.map', 'hs.core'])
            
            .directive('hs.attrTable.directive', function() {
                return {
                    templateUrl: hsl_path + 'components/attrTable/partials/table.html?bust=' + gitsha
                };
            })
        
         .service('hs.attrTable.service', function() {

                }
            )
         .controller('hs.attrTable.controller', ['$scope', '$compile','hs.map.service', 'hs.attrTable.service', 'Core', 
            function($scope, $compile, OlMap, TableService, Core) {
            
        }
    ]);

})