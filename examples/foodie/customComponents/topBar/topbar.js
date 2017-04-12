define(['angular', 'map', 'core'],

    function(angular) {
        angular.module('topbar', ['hs.map', 'hs.core'])
            
            .directive('topbar', function() {
                return {
                    templateUrl: 'customComponents/topBar/topbar.html?bust=' + gitsha
                };
            })
         .controller('topbarctrl', ['$rootScope','$scope', '$compile','hs.map.service', 'Core', 'config',
            function($rootScope,$scope, $compile, OlMap, Core, config) {
                $scope.headers = ["Inspect yield potential","Select parcels","Fertilizer dosing","Compute variable rate","Results"];
                
                var style = new ol.style.Style({
                    fill: new ol.style.Fill({
                        color: "rgba(108, 184, 222, 0.34)",
                    }),
                    stroke: new ol.style.Stroke({
                        color: '#430043',
                        width: 2
                    })
                });
                
                var selectStyle = new ol.style.Style({
                            fill: new ol.style.Fill({
                                color: "rgba(108, 184, 222, 0.34)",
                            }),
                            stroke: new ol.style.Stroke({
                                color: '#00ffe2',
                                width: 2
                            })
                        });
                
                var plotLayer =  new ol.layer.Vector({
                    title: "Plot layer",
                    source: new ol.source.Vector, 
                    style: style
                });
                
                var selectionBackup = [];
                
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
                    var old = $scope.activeHead;
                    $scope.activeHead = index;
                    checkState(index, old);
                    
                }
                
                function changeLayerVisibility (visibility, layer) {
                    var layers = hslayers_api.gui.LayerManager.layers;
                    for (var i = 0; i < layers.length; i++) {
                        if (layers[i].layer == layer) hslayers_api.gui.LayerManager.changeLayerVisibility(visibility,layers[i]);
                    }
                }
                
                function checkState(index, oldindex) {
                    var tester = plotLayer;
                    switch (oldindex) {
                        case 0: break;
                        case 1:
                            OlMap.map.removeInteraction(lpisSelector);
                            break;
                        case 2: 
                            $scope.$emit('tableClosed');
                            break;
                        case 3: 
                            $scope.$emit('tableClosed');
                            break;
                    }
                    switch (index) {
                        case 0: break;
                        case 1:
                            if (typeof(lpisLayer) == 'undefined') initLpis();
                            OlMap.map.addInteraction(lpisSelector);
                            refillSelection();
                            break;
                        case 2:
                            if (oldindex != 1) {
                                refillSelection();
                                populatePlotLayer();
                                backupSelection();
                            }
                            else {
                                populatePlotLayer();
                            }
                            if (!OlMap.findLayerByTitle("Plot layer")) OlMap.map.addLayer(plotLayer);
                            checkRates();
                            $scope.$emit('tableOpened',plotLayer);
                            break;
                        case 3: 
                            $scope.$emit('tableOpened',plotLayer);
                            $scope.blocked[4] = false;
                            break;
                        case 4: 
                            sendVRRequest();
                            break;
                    }
                    switch (index) {
                        case 0:
                        case 1: 
                            changeLayerVisibility(true,lpisLayer);
                            changeLayerVisibility(false,plotLayer);
                            break;
                        case 2:
                        case 3:
                            changeLayerVisibility(false,lpisLayer);
                            changeLayerVisibility(true,plotLayer);
                            break;
                    }
                    if (oldindex == 1) {
                        backupSelection();
                    }
                }
                
                function backupSelection() {
                    lpisCleaner = true;
                    selectionBackup.length = 0;
                    lpisSelector.getFeatures().forEach(function(feature){
                        selectionBackup.push(feature.getId());
                    });
                    lpisSelector.getFeatures().clear();
                    lpisCleaner = false;
                }
                
                function refillSelection() {
                    lpisCleaner = true;
                    for (var i = 0; i < selectionBackup.length; i++) {
                        lpisSelector.getFeatures().push(lpisLayer.getSource().getFeatureById(selectionBackup[i]));
                    }
                    lpisSelector.getFeatures().forEach(function(feature){
                        feature.setStyle(selectStyle);
                    });
                    lpisLayer.setStyle(lpisLayer.getStyle());
                    lpisCleaner = false;
                }
                
                function initLpis() {
                    lpisLayer = OlMap.findLayerByTitle("LPIS Luxembourg");
                    lpisSelector = new ol.interaction.Select({
                        condition: ol.events.condition.click,
                        toggleCondition: ol.events.condition.click,
                        layers: [lpisLayer],
                        style: selectStyle
                    });
                    lpisSelector.getFeatures().on('change:length', function(e){
                        $scope.selectedFields = e.target.get('length');
                        if (e.target.get('length') > 0) {
                            $scope.blocked[2] = false;
                        }
                        else if ($scope.activeHead == 1) {
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
                            var indexWanted;
                            for (var i = 0; i < selected.length; i++) {
                                if (selected[i].getId() == feature.getId()) {
                                    indexWanted = i;
                                    break;
                                }
                            }
                            selected.splice(indexWanted,1);
                        }
                    });
                    selected.forEach(function(feature){
                        feature.set('surface',(feature.get('surface')/10000).toFixed(2));
                        feature.set('fertilizer');
                        feature.set('rate');    
                    });
                    plotSource.addFeatures(selected);
                    plotSource.getFeatures().forEach(function(feature){
                        feature.setStyle(style);
                    });
                }
                
                function checkRates() {
                    var full = true;
                    var plotFeatures = plotLayer.getSource().getFeatures();
                    plotFeatures.forEach(function(feature){
                        if (typeof(feature.get('rate')) == "undefined" || feature.get('rate') == "") full = false;
                    });
                    if (full) {
                        $scope.blocked[3] = false;
                        $scope.setActive(3);
                    }
                    else {
                        $scope.blocked[3] = true;
                    }
                }
                            
                $scope.flushLpis = function() {
                    lpisCleaner = true;
                    lpisSelector.getFeatures().clear(); 
                    lpisCleaner = false;
                }
                
                function sendVRRequest() {
                    var plotSource = plotLayer.getSource();
                    var requestData = [];
                    plotSource.getFeatures().forEach(function(feature){
                        var field = {};
                        field.flik = feature.get('flik');
                        field.rate = feature.get('rate');
                        requestData.push(field);
                    });
                    $(".cover").css("display","block");
                    $.ajax({
                        url: config.variableRateUrl,
                        cache: false,
                        method: 'POST',
                        dataType: "json",
                        data: JSON.stringify(requestData),
                    })
                        
                }
                
                $rootScope.$on('plotUpdated', function(e){
                    checkRates();
                });
                
                $scope.$emit('scope_loaded', "TopBar");
        }
    ]);

})