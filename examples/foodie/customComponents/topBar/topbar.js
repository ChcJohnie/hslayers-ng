define(['angular', 'map', 'core'],

    function(angular) {
        angular.module('topbar', ['hs.map', 'hs.core'])
            
            .directive('topbar', function() {
                return {
                    templateUrl: 'customComponents/topBar/topbar.html?bust=' + gitsha
                };
            })
         .controller('topbarctrl', ['$scope', '$compile','hs.map.service', 'Core', 
            function($scope, $compile, OlMap, Core) {
                $scope.headers = ["Inspect yield potential","Select parcels","Fertilizer dosing","Compute variable rate","Results"];
                
                var plotLayer =  new ol.layer.Vector({
                    title: "Plot layer",
                    source: new ol.source.Vector
                });
                
                $scope.selectedFields = 0;
                
                var lpisLayer, lpisSelector, lpisCleaner; 
                
                $scope.activeHead = 0;
                
                $scope.blocked = [false,false,true,true,true];
                
                $scope.isActive = function(index) {
                    return index == $scope.activeHead ? true : false;
                }
                
                $scope.isBlocked = function(index) {
                    return $scope.blocked[index] == true ? true : false;
                }
    
                $scope.setActive = function(index) {
                    if ($scope.blocked[index]) return;
                    checkState(index, $scope.activeHead);
                    $scope.activeHead = index;
                }
                
                function checkState(index, oldindex) {
                    switch (oldindex) {
                        case 0: break;
                        case 1:
                            OlMap.map.removeInteraction(lpisSelector);
                            break;
                    }
                    switch (index) {
                        case 0: break;
                        case 1:
                            if (typeof(lpisLayer) == 'undefined') initLpis();
                            OlMap.map.addInteraction(lpisSelector);
                            break;
                        case 2:
                            populatePlotLayer();
                            if (!OlMap.findLayerByTitle("Plot layer")) OlMap.map.addLayer(plotLayer);
                    }
                }
                
                function initLpis() {
                    lpisLayer = OlMap.findLayerByTitle("LPIS Luxembourg");
                    lpisSelector = new ol.interaction.Select({
                        condition: ol.events.condition.click,
                        toggleCondition: ol.events.condition.click,
                        layers: [lpisLayer]
                    });
                    lpisSelector.getFeatures().on('change:length', function(e){
                        $scope.selectedFields = e.target.get('length');
                        if (e.target.get('length') > 0) {
                            $scope.blocked[2] = false;
                        }
                        else {
                            $scope.blocked[2] = true;
                        }
                        if (lpisCleaner) return;
                        $scope.$digest();
                    });
                }
                
                function populatePlotLayer() {
                    var plotSource = plotLayer.getSource();
                    var selected = lpisSelector.getFeatures().getArray().slice();
                    var selectedId = [];
                    selected.forEach(function(feature){
                        selectedId.push(feature.getId());    
                    });
                    plotSource.getFeatures().forEach(function(feature){
                        if (selectedId.indexOf(feature.getId()) < 0) {
                            plotSource.removeFeature(feature);
                        }
                        else {
                            selected.splice(selectedId.indexOf(feature.getId()),1);
                        }
                    });
                    selected.forEach(function(feature){
                        feature.set('fertilizer');
                        feature.set('rate');    
                    });
                    plotSource.addFeatures(selected);
                }
                
                $scope.flushLpis = function() {
                    lpisCleaner = true;
                    lpisSelector.getFeatures().clear(); 
                    lpisCleaner = false;
                }
                
                $scope.$emit('scope_loaded', "TopBar");
        }
    ]);

})