'use strict';

define(['angular', 'ol', 'toolbar', 'layermanager', 'WfsSource', 'sidebar', 'map', 'query', 'search', 'print', 'permalink', 'measure', 'geolocation', 'api', 'bootstrap', 'angular-gettext', 'translations'],

    function(angular, ol, toolbar, layermanager, WfsSource) {
        var module = angular.module('hs', [
            'hs.core',
            'hs.toolbar',
            'hs.layermanager',
            'hs.map',
            'hs.query',
            'hs.search', 'hs.print', 'hs.permalink',
            'hs.geolocation',
            'hs.api',
            'gettext',
            'hs.sidebar'
        ]);

        module.directive('hs', ['hs.map.service', 'Core', function(OlMap, Core) {
            return {
                templateUrl: hsl_path + 'hslayers.html',
                link: function(scope, element) {
                    Core.fullScreenMap(element);
                }
            };
        }]);

        var style = new ol.style.Style({
            image: new ol.style.Circle({
                fill: new ol.style.Fill({
                    color: [242, 121, 0, 0.7]
                }),
                stroke: new ol.style.Stroke({
                    color: [0xbb, 0x33, 0x33, 0.7]
                }),
                radius: 5
            }),
            fill: new ol.style.Fill({
                color: "rgba(139, 189, 214, 0.3)",
            }),
            stroke: new ol.style.Stroke({
                color: '#112211',
                width: 1
            })
        });

        module.value('config', {
            default_layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                    title: "Base layer",
                    base: true
                }),
                new ol.layer.Vector({
                    title: "Kraje",
                    source: new WfsSource({
                        url: 'http://localhost:8080/geoserver/wfs?',
                        typename: 'cr:kraje',
                        projection: 'EPSG:3857'
                    }),
                    style: style
                })
            ],
            default_view: new ol.View({
                center: ol.proj.transform([16.5500000, 49.200000], 'EPSG:4326', 'EPSG:3857'), //Latitude longitude    to Spherical Mercator
                zoom: 8,
                units: "m"
            })
        });

        module.controller('Main', ['$scope', 'Core',
            function($scope, Core) {
                if (console) console.log("Main called");
                $scope.hsl_path = hsl_path; //Get this from hslayers.js file
                $scope.Core = Core;

                $scope.$on('infopanel.updated', function(event) {});
            }
        ]);

        return module;
    });
