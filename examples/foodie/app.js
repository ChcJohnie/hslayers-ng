'use strict';

define(['angular', 'ol', 'toolbar', 'layermanager', 'WfsSource', 'map', 'workflow', 'search', 'print', 'permalink', 'measure', 'geolocation', 'api', 'bootstrap', 'angular-gettext', 'translations','topbar', 'floater','tablefloater'],

    function(angular, ol, toolbar, layermanager, WfsSource) {
        var module = angular.module('hs', [
            'hs.core',
            'hs.toolbar',
            'hs.layermanager',
            'hs.map',
            'hs.search',
            'hs.print',
            'hs.permalink',
            'hs.geolocation',
            'hs.api',
            'gettext',
            'hs.workflow',
            'topbar','floater','tablefloater'
        ]);

        module.directive('hs', ['hs.map.service', 'Core', function(OlMap, Core) {
            return {
                templateUrl: 'hslayers.html',
                link: function(scope, element) {
                    Core.init(element,{
                        map: {container: "map-field"}
                    });
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
                color: "rgba(108, 184, 222, 0.34)",
            }),
            stroke: new ol.style.Stroke({
                color: '#430043',
                width: 2
            })
        });

        var projection = ol.proj.get('EPSG:3857');
        var projectionExtent = projection.getExtent();
        var size = ol.extent.getWidth(projectionExtent) / 256;
        var resolutions = new Array(14);
        var matrixIds = new Array(14);
        for (var z = 0; z < 20; ++z) {
            // generate resolutions and matrixIds arrays for this WMTS
            resolutions[z] = size / Math.pow(2, z);
            matrixIds[z] = z;
        }
    
        module.value('config', {
            resetButton: false,
            default_layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                    title: "Topography basemap",
                    base: true,
                    visible: false
                }),
                new ol.layer.Tile({
                    source: new ol.source.WMTS({
                      url: 'http://wmts1.geoportail.lu/opendata/wmts/ortho_2016/{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}.jpeg',
                      layer: 'Photographies aériennes orthorectifiées 2016',
                      requestEncoding: "REST",
                      matrixSet: 'GLOBAL_WEBMERCATOR_4_V3',
                      projection: ol.proj.get('EPSG:3857'),
                      tileGrid: new ol.tilegrid.WMTS({
                        origin: ol.extent.getTopLeft(projectionExtent),
                        resolutions: resolutions,
                        matrixIds: matrixIds
                      }),
                      style: 'default',
                    }),
                    title: "Luxembourg Ortophoto",
                    base: true,
                    visible: true
                }),
                new ol.layer.Vector({
                    title: "LPIS Luxembourg",
                    source: new WfsSource({
                        url: 'http://gis.lesprojekt.cz/cgi-bin/mapserv?map=/home/dima/maps/foodie/luxemburg.map',
                        typename: 'lpis_borders',
                        projection: 'EPSG:3857',
                        provider: 'mapserver'
                    }),
                    style: style,
                    maxResolution: 10
                })
            ],
            default_view: new ol.View({
                center: ol.proj.transform([6.1300000, 49.610000], 'EPSG:4326', 'EPSG:3857'), //Latitude longitude    to Spherical Mercator
                zoom: 14,
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
            },
            variableRateUrl: "http://foodie-data.wirelessinfo.cz/geoserver-hsl/kojcice/wms"
        });

        module.controller('Main', ['$rootScope', '$scope', 'Core','hs.map.service','hs.map.selectionService',
            function($rootScope, $scope, Core, OlMap, Selector) {
                //if (console) console.log("Main called");
                $scope.hsl_path = hsl_path; //Get this from hslayers.js file
                $scope.Core = Core;
                Core.sidebarRight = false;
                Core.expandedToolbar = true;
                Core.sidebarExpanded = false;

                $scope.$on('infopanel.updated', function(event) {});
                
            }
        ]);

        return module;
    });
