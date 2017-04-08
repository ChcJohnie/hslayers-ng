define(['angular', 'map', 'core'],

    function(angular) {
        angular.module('floater', ['hs.map', 'hs.core'])
            
            .directive('floater', function() {
                return {
                    templateUrl: 'customComponents/floater/floater.html?bust=' + gitsha
                };
            })
         .controller('floaterctrl', ['$rootScope','$scope', '$compile','hs.map.service', 'Core', 
            function($rootScope, $scope, $compile, OlMap, Core) {
                
                refreshManager();
                
                $rootScope.$on("layermanager.updated", function(event,data){
                    refreshManager();
                }); 
                
                $scope.changeBaseLayerVisibility = function($event,layer) {
                    hslayers_api.gui.LayerManager.changeBaseLayerVisibility($event,layer);
                }
                
                $scope.isLayerQueryable = function(layer_container) {
                    return hslayers_api.gui.LayerManager.isLayerQueryable(layer_container);
                }
                
                $scope.changeLayerVisibility = function(visibility, layer) {
                    hslayers_api.gui.LayerManager.changeLayerVisibility(!layer.visible, layer);
                }
                
                $scope.isTableable = function(layer) {
                    return hslayers_api.gui.LayerManager.isTableable(layer);
                }
                
                $scope.openTable = function(layer) {
                    hslayers_api.gui.LayerManager.openTable(layer);
                }
                
                $scope.setLayerOpacity = function(layer) {
                    hslayers_api.gui.LayerManager.setLayerOpacity(layer.layer, layer.opacity);
                }
                
                $scope.styleLayer = function(layer) {
                    hslayers_api.gui.LayerManager.styleLayer(layer.layer);
                }
                
                $scope.layerIsStyleable = function(layer) {
                    if (typeof(layer) == "undefined") return;
                    return hslayers_api.gui.LayerManager.layerIsStyleable(layer.layer);
                }
                
                function refreshManager() {
                    $scope.baselayers = hslayers_api.gui.LayerManager.baselayers;
                    $scope.layers = hslayers_api.gui.LayerManager.layers;    
                }
                
                $scope.$emit('scope_loaded', "floater");
        }
    ]);

})