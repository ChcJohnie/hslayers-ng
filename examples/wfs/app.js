'use strict';

define(['angular', 'ol', 'toolbar', 'layermanager', 'WfsSource'/*, 'sidebar'*/, 'map', 'attrtable','workflow',/*'query',*/ 'search', 'print', 'permalink', 'measure', 'geolocation', 'api', 'bootstrap', 'angular-gettext', 'translations'],

    function(angular, ol, toolbar, layermanager, WfsSource) {
        var module = angular.module('hs', [
            'hs.core',
            'hs.toolbar',
            'hs.layermanager',
            'hs.map',
            //'hs.query',
            'hs.search', 'hs.print', 'hs.permalink',
            'hs.geolocation',
            'hs.api',
            'gettext',
            //'hs.sidebar',
            'hs.attrtable',
            'hs.workflow'
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
                    title: "Countries",
                    source: new ol.source.Vector({
                        format: new ol.format.GeoJSON(),
                        url: 'countries.geojson'
                    }),
                    style: style
                }),
                new ol.layer.Vector({
                    title: "Kraje",
                    source: new WfsSource({
                        url: 'http://localhost:8080/geoserver/wfs?',
                        typename: 'cr:kraje',
                        projection: 'EPSG:3857'
                    }),
                    style: style
                }),
                new ol.layer.Tile({
                    title: "Ilida plastics kg/ha per year",
                    source: new ol.source.TileWMS({
                        url: 'http://gis.lesprojekt.cz/cgi-bin/mapserv?map=/home/dima/maps/ilida/ilida.map',
                        params: {
                            LAYERS: 'ilida_cultivation_plastics',
                            INFO_FORMAT: undefined,
                            FORMAT: "image/png",
                            ABSTRACT: "Plastic waste in Ilida municipality"
                        },
                        crossOrigin: null
                    }),
                    path: 'Ilida Thematic Data',
                    visible: true,
                    opacity: 0.8
                }),
                new ol.layer.Tile({
                    title: "Výnosový potenciál",
                    source: new ol.source.TileWMS({
                        url: 'http://foodie-data.wirelessinfo.cz/geoserver-hsl/kojcice/wms?',
                        params: {
                            LAYERS: 'kojcice_vynospot_5m_poly',
                            //INFO_FORMAT: undefined,
                            INFO_FORMAT: 'text/html',
                            FORMAT: "image/png"
                            },
                        crossOrigin: null
                    }),
                    path: 'Kojčice',
                    visible: true,
                    opacity: 0.5
                }),
                new ol.layer.Tile({
                    title: "Aplikační pásma dle výnosového potenciálu",
                    source: new ol.source.TileWMS({
                        url: 'http://foodie-data.wirelessinfo.cz/geoserver-hsl/kojcice/wms?',
                        params: {
                            LAYERS: 'kojcice_vra_n1_pole_viper',
                            //INFO_FORMAT: undefined,
                            INFO_FORMAT: 'text/html',
                            FORMAT: "image/png"
                        },
                        crossOrigin: null
                    }),
                    path: 'Kojčice',
                    visible: true,
                    opacity: 0.5
                })
                
            ],
            default_view: new ol.View({
                center: ol.proj.transform([16.5500000, 49.200000], 'EPSG:4326', 'EPSG:3857'), //Latitude longitude    to Spherical Mercator
                zoom: 8,
                units: "m"
            }),
            hostname: {
                "default": {
                    "title": "Default",
                    "type": "default",
                    "editable": false,
                    "url": 'http://youth.sdi4apps.eu'
                },
                "compositions_catalogue": {
                    "title": "Compositions catalogue",
                    "type": "compositions_catalogue",
                    "editable": true,
                    "url": 'http://foodie-dev.wirelessinfo.cz'
                },
                "status_manager": {
                    "title": "Status manager",
                    "type": "status_manager",
                    "editable": true,
                    "url": 'http://foodie-dev.wirelessinfo.cz'
                },
            }
        });

        module.controller('Main', ['$rootScope', '$scope', 'Core','hs.map.service','hs.map.selectionService',
            function($rootScope, $scope, Core, OlMap, Selector) {
                if (console) console.log("Main called");
                $scope.hsl_path = hsl_path; //Get this from hslayers.js file
                $scope.Core = Core;
                Core.sidebarRight = false;
                Core.expandedToolbar = true;
                Core.sidebarExpanded = false;

                $scope.$on('infopanel.updated', function(event) {});
                
                $rootScope.$on("map.loaded", function(e) {
                    Selector.init();
                });
            }
        ]);

        return module;
    });
