/**
 * @namespace hs
 */

/**
 * @namespace hs.core
 * @memberOf hs
 */
require.config({
    paths: {
        dc: requirejs.s.contexts._.config.paths.dc || '//cdnjs.cloudflare.com/ajax/libs/dc/1.7.0/dc',
        ol: requirejs.s.contexts._.config.paths.ol || hsl_path + 'node_modules/openlayers/dist/ol',

        angular: hsl_path + 'bower_components/angular/angular.min',
        'angular-sanitize': hsl_path + 'bower_components/angular-sanitize/angular-sanitize',
        'angular-gettext': hsl_path + 'bower_components/angular-gettext/dist/angular-gettext',
        'angularjs-socialshare': hsl_path + 'bower_components/angularjs-socialshare/dist/angular-socialshare',
        'angular-smart-table': hsl_path + 'bower_components/angular-smart-table/dist/smart-table',
        'angular-xeditable': hsl_path + 'bower_components/angular-xeditable/dist/js/xeditable',
        'angular-ui-grid': hsl_path + 'bower_components/angular-ui-grid/ui-grid',
        bootstrap: requirejs.s.contexts._.config.paths.bootstrap || hsl_path + 'bower_components/bootstrap/dist/js/bootstrap',
        crossfilter: requirejs.s.contexts._.config.paths.crossfilter || hsl_path + 'bower_components/crossfilter/crossfilter.min',
        draw: hsl_path + 'components/draw/draw',
        d3: requirejs.s.contexts._.config.paths.d3 || hsl_path + 'bower_components/d3/d3.min',
        ngcookies: hsl_path + 'bower_components/angular-cookies/angular-cookies',
        proj4: requirejs.s.contexts._.config.paths.proj4 || hsl_path + 'bower_components/proj4/dist/proj4',
        xml2json: requirejs.s.contexts._.config.paths.xml2json || hsl_path + 'bower_components/xml2json/xml2json.min',
        api: requirejs.s.contexts._.config.paths.api || hsl_path + 'components/api/api',
        attrtable: hsl_path + 'components/attrtable/attrtable',
        compositions: hsl_path + 'components/compositions/compositions',
        datasource_selector: hsl_path + 'components/datasource_selector/datasource_selector',
        drag: hsl_path + 'components/drag/drag',
        geojson: requirejs.s.contexts._.config.paths.geojson || hsl_path + 'components/layers/hs.source.GeoJSON',
        geolocation: requirejs.s.contexts._.config.paths.geolocation || hsl_path + 'components/geolocation/geolocation',
        info: requirejs.s.contexts._.config.paths['info'] || hsl_path + 'components/info/info',
        layermanager: hsl_path + 'components/layermanager/layermanager',
        legend: hsl_path + 'components/legend/legend',
        lodexplorer: hsl_path + 'components/lodexplorer/lodexplorer',
        map: hsl_path + 'components/map/map',
        measure: hsl_path + 'components/measure/measure',
        mobile_toolbar: requirejs.s.contexts._.config.paths.mobile_toolbar || hsl_path + 'components/mobile_toolbar/mobile_toolbar',
        mobile_settings: requirejs.s.contexts._.config.paths.mobile_settings || hsl_path + 'components/mobile_settings/mobile_settings',
        ows: hsl_path + 'components/ows/ows',
        'ows.nonwms': hsl_path + 'components/ows/ows_nonwms',
        'ows.wfs': hsl_path + 'components/ows/ows_wfs',
        'ows.wms': hsl_path + 'components/ows/ows_wms',
        'ows.wmts': hsl_path + 'components/ows/ows_wmts',
        'ows.wmsprioritized': hsl_path + 'components/ows/ows_wmsprioritized',
        panoramio: hsl_path + 'components/layers/panoramio/panoramio',
        permalink: requirejs.s.contexts._.config.paths.permalink || hsl_path + 'components/permalink/permalink',
        print: hsl_path + 'components/print/print',
        query: hsl_path + 'components/query/query',
        sidebar: requirejs.s.contexts._.config.paths.sidebar || hsl_path + 'components/sidebar/sidebar',
        search: hsl_path + 'components/search/search',
        SparqlJson: requirejs.s.contexts._.config.paths.SparqlJson || hsl_path + 'components/layers/hs.source.SparqlJson',
        status_creator: hsl_path + 'components/status_creator/status_creator',
        styles: hsl_path + 'components/styles/styles',
        toolbar: requirejs.s.contexts._.config.paths.toolbar || hsl_path + 'components/toolbar/toolbar',
        translations: requirejs.s.contexts._.config.paths.translations || hsl_path + 'components/translations/js/translations',
        utils: hsl_path + 'components/utils',
        workflow: hsl_path + 'components/workflow/workflow',
        WFSCapabilities: requirejs.s.contexts._.config.paths.WFSCapabilities || hsl_path + 'components/format/hs.format.WFSCapabilities',
        WfsSource: requirejs.s.contexts._.config.paths.WfsSource || hsl_path + 'components/layers/hs.source.Wfs',
        routing: hsl_path + 'components/routing/routing',
        tracking: hsl_path + 'components/tracking/tracking',
        s4a: requirejs.s.contexts._.config.paths.s4a || hsl_path + 'bower_components/s4a-js/dist/s4a.min',
        'dragdroplists': hsl_path + 'bower_components/angular-drag-and-drop-lists/angular-drag-and-drop-lists',
        'ngfocusif': hsl_path + 'bower_components/ng-focus-if/focusIf.min',
        'updateMeta': hsl_path + 'bower_components/angular-update-meta/dist/update-meta',
        socketio: hsl_path + 'bower_components/socket.io-client/socket.io',
        rtserver: requirejs.s.contexts._.config.paths.rtserver || hsl_path + 'components/rtserver/rtserver',
        config_parsers: hsl_path + 'components/compositions/config_parsers'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularjs-socialshare': {
            deps: ['angular']
        },
        'angular-xeditable': {
            deps: ['angular']
        },
        'ngfocusif': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular'],
        },
        'dragdroplists': {
            deps: ['angular'],
        },
        'updateMeta': {
            deps: ['angular'],
        },
        'angular-gettext': {
            deps: ['angular'],
        },
        ngcookies: {
            deps: ['angular'],
        },
        translations: {
            deps: ['angular-gettext'],
        }
    },
    priority: [
        "angular"
    ]
});

define(['angular', 'angular-gettext', 'translations', 'ol', 'map', 'drag', 'api', 'proj4'],
    function(angular, proj4) {
        angular.module('hs.core', ['hs.map', 'gettext', 'gettext', 'hs.drag', 'hs.api'])
            /**
            * @ngdoc service
            * @name Core
            * @memberOf hs.core
            * @description Core service of HSL, keeps important app-level settings.
            */
            .service("Core", ['$rootScope', '$controller', '$window', 'hs.map.service', 'gettextCatalog', 'config', '$templateCache',
                function($rootScope, $controller, $window, OlMap, gettextCatalog, config, $templateCache) {
                    var me = {
                        config: config,
                        scopes_registered: [],
                        mainpanel: "",
                        oldpanel: "",
                        defaultPanel: "",
                        sidebarExpanded: false,
                        sidebarRight: true,
                        sidebarLabels: true,
                        sidebarToggleable: true,
                        sidebarButtons: true,
                        sidebarWide: false,
                        singleDatasources: false,
                        embededEnabled: true,
                        smallWidth: false,
                        panel_statuses: {},
                        panel_enabled: {},
                        _exist_cache: {},
                        current_panel_queryable: false,
                        hsSize: {height: "100%",width: "100%"},
                        puremapApp: false,
                        expandedToolbar: false,
                        widePanels: ["attrtable"],
                        /**
                         * @function setMainPanel
                         * @memberOf Core
                         * @param {String} which New panel to activate
                         * @param {Boolean} by_gui Whether function call came as result of GUI action
                         * @param {Boolean} queryable If map should be queryable with new mainpanel
                         * Sets new main panel (Active panel when sidebar is in expanded mode). Change GUI and queryable status of map
                         */
                        setMainPanel: function(which, by_gui, queryable) {
                            console.log(me.sidebarWide);
                            checkPanelWidth(which);
                            me.oldpanel = me.mainpanel;
                            if (which == me.mainpanel && by_gui) {
                                which = "";
                                if (me.sidebarExpanded == true) {
                                    me.sidebarLabels = true;
                                }
                            } else {
                                me.sidebarExpanded = true;
                                me.sidebarLabels = false;
                            }
                            me.mainpanel = which;
                            if (typeof queryable == 'undefined')
                                me.current_panel_queryable = true;
                            else
                                me.current_panel_queryable = queryable;
                            if (!$rootScope.$$phase) $rootScope.$digest();
                            $rootScope.$broadcast('core.mainpanel_changed');
                        },
                        /**
                         * @function setDefaultPanel
                         * @memberOf Core
                         * @param {String} which Panel to be default
                         * Sets new default panel (Panel which is opened first and which displayed if previous active panel is closed)
                         */
                        setDefaultPanel: function(which) {
                            me.defaultPanel = which;
                            me.setMainPanel(which);
                        },
                        /**
                         * @function updateMapSize
                         * @memberOf Core
                         * Change size of map element in application. Size should be rest of window width next to sidebar
                         */
                        updateMapSize: function() {
                            //debugger;
                            var element = $("div[hs]");
                            var map = $("#map");
                            var sidebarElem = $('.panelspace');
                            map.width(element.width());
                            if(angular.isDefined(OlMap.map)) OlMap.map.updateSize();
                            ( map.width() - sidebarElem.width() ) < 368 ? me.smallWidth = true : me.smallWidth = false;
                            if (!$rootScope.$$phase) $rootScope.$digest();
                        },
                        /**
                         * @function panelVisible
                         * @memberOf Core
                         * @param {String} which 
                         * @param {$scope} scope 
                         * @description Todo
                         */
                        panelVisible: function(which, scope) {
                            //debugger;
                            if (angular.isDefined(scope))
                                if (angular.isUndefined(scope.panel_name)) scope.panel_name = which;
                            if (angular.isDefined(me.panel_statuses[which])) {
                                return me.panel_statuses[which];
                            }
                            //console.log(which);
                            //console.log(me.mainpanel == which || (angular.isDefined(scope) && scope.unpinned));
                            return me.mainpanel == which || (angular.isDefined(scope) && scope.unpinned);
                        },
                        /**
                         * @function panelEnabled
                         * @memberOf Core
                         * @param {String} which Panel name
                         * @param {Boolean} status Expected status of the panel
                         * Gets and sets whether a panel is visible in the sidebar so it can be hidden even though the panels controller is loaded.
                         */
                        panelEnabled: function(which, status) {
                            if (typeof status == 'undefined') {
                                if (angular.isDefined(me.panel_enabled[which]))
                                    return me.panel_enabled[which];
                                else
                                    return true;
                            } else
                                me.panel_enabled[which] = status;
                        },
                        /**
                         * @function hidePanels
                         * @memberOf Core
                         * Hide panels Deprecated?
                         */
                        hidePanels: function() {
                            me.mainpanel = '';
                            me.sidebarLabels = true;
                            if (!me.exists('hs.sidebar.controller')) {
                                me.sidebarExpanded = false
                            }
                            if (!$rootScope.$$phase) $rootScope.$digest();
                            $rootScope.$broadcast('core.mainpanel_changed');
                        },
                        /**
                         * @function closePanel
                         * @memberOf Core
                         * @param {String} which Panel name of panel to close
                         * Close selected panel. Resolve unpinned panels and new main panel in relevance to app settings. 
                         */
                        closePanel: function(which) {
                            me.oldpanel = "";
                            
                            if (which.unpinned) {
                                which.drag_panel.appendTo($(which.original_container));
                                which.drag_panel.css({
                                    top: 'auto',
                                    left: 'auto',
                                    position: 'relative'
                                });
                            }
                            which.unpinned = false;
                            if (me.expandedToolbar == true) {
                                me.sidebarExpanded = false;
                            }
                            if (which.panel_name == me.mainpanel) {
                                if (me.defaultPanel != '') {
                                    me.setMainPanel(me.defaultPanel);
                                    checkPanelWidth(me.defaultPanel);
                                } else {
                                    me.mainpanel = '';
                                    me.sidebarLabels = true;
                                    checkPanelWidth("");
                                }
                                if (!me.exists('hs.sidebar.controller')) {
                                    me.sidebarExpanded = false
                                }

                            }
                            

                            $rootScope.$broadcast('core.mainpanel_changed',which);
                        },
                        /**
                         * @function exists
                         * @memberOf Core
                         * @param {String} controllerName Controler to test
                         * Test if selected controller is defined in application. 
                         */
                        exists: function(controllerName) {
                            if (angular.isDefined(me._exist_cache[controllerName])) return true;
                            if (typeof window[controllerName] == 'function') {
                                return true;
                            }
                            try {
                                $controller(controllerName);
                                me._exist_cache[controllerName] = true;
                                return true;
                            } catch (error) {
                                var t = !(error instanceof TypeError);
                                if (t) me._exist_cache[controllerName] = true;
                                return t;
                            }
                        },
                        /**
                        * @function init
                        * @memberOf Core
                        * @params {Object} element HS layers element gained from directive link
                        * @params {Array|String} value Type of initialization, possible options: (undefined - full window app, "self" - size of hs element setted by css, only pixel values, "parent" - take size from parent element, "id" - ID of another element from which size should be taken, if its direct parent element, parent option is recommended)
                        * @description Universal function for initialization of directive with main HSLayers template and setting correct size to it. Take all posible inputs and switch to correct application size setter. Turn on all neceserary event listeners for resizing HSLayers element.
                        */
                        init: function(element, value) {
                            if (typeof(value) == undefined) {
                                me.fullScreenMap(element);
                            }
                            else if (value == "self") {
                                me.appSize(element,element);
                            }
                            else if (value == "parent") {
                                me.appSize(element,element.parent());
                            }
                            else {
                                var id = "#" + value;
                                me.appSize(element,$(id));
                            }
                        },
                        /**
                         * @function fullScreenMap
                         * @memberOf Core
                         * @param {Object} element Element to resize while going fullscreen
                         * Utility function for initialization of app, when app take whole window
                         */
                        fullScreenMap: function(element) {
                            $("html").css('overflow', 'hidden');
                            $("html").css('height', '100%');
                            $('body').css('height', '100%');
                            var w = angular.element($window);
                            me.appSize(element, w);
                        },
                        /**
                        * @function appSize
                        * @memberOf Core
                        * @param {Object} element HS element, for which size is set
                        * @param {Object} container Base element for resizing, either element or window object
                        * Set right size of app in page, starts event listeners for events which lead to changing app size (window resizing, change of app settings)
                        */
                        appSize: function(element, container) {
                            me.changeSize(element, container);
                            var w = angular.element($window);
                            w.resize(function(){
                                me.changeSize(element, container);
                            });
                            $rootScope.$on("Core_sizeChanged",function(){
                                me.changeSize(element, container);
                            });
                            $(function() { //onload checker for cases when bootstrap css change box-sizing property
                                me.changeSize(element, container);
                            });
                        },
                         /**
                         * @function changeSize
                         * @memberOf Core
                         * @params {Object} element Angular object containing app element
                         * @params {Object} container Base element object, to get requested size
                         * Check current size of containing element and change setting of HS element
                         */
                        changeSize: function(element,container) {
                            if (element === container && me.hsSize.height.indexOf("%") > -1) {
                                var size = getSize(element.parent(),me.hsSize); 
                            }
                            else {
                                var size = getSize(container,me.hsSize);    
                            }
                            var size = getSize(container,me.hsSize);
                            element[0].style.height = size.height + "px";
                            element[0].style.width = size.width + "px";
                            $("#map").height(size.height);
                            me.updateMapSize();
                        },
                        /**
                        * @function changeSizeConfig
                        * @memberOf Core
                        * @param {String} newHeight New height setting for app (Pixel or percentage value e.g. '960px'/'100%')
                        * @param {String} newWidth New width setting for app (Pixel or percentage value e.g. '960px'/'100%')
                        * Change max height and width of app element 
                        */
                        changeSizeConfig: function(newHeight, newWidth) {
                            me.hsSize.height = newHeight;
                            me.hsSize.width = newWidth;
                            $rootScope.$broadcast("Core_sizeChanged");
                        },
                        /**
                         * @function setLanguage
                         * @memberOf Core
                         * @param {String} lang Language to select 
                         * Set current active language for translating. (Currently cs and nl options supported).
                         */
                        setLanguage: function(lang) {
                            switch (lang) {
                                case "cs_CZ":
                                    lang = 'cs';
                                    break;
                                case "nl_BE":
                                    lang = 'nl';
                                    break;
                            }
                            gettextCatalog.setCurrentLanguage(lang);
                        },
                        /**
                         * @function getAllScopes
                         * @memberOf Core
                         * @returns {Array} Array of all active Angular Scopes of app
                         * Get all scopes defined in app
                         */
                        getAllScopes: function() {
                            var getScopes = function(root) {
                                var scopes = [];

                                function visit(scope) {
                                    scopes.push(scope);
                                }

                                function traverse(scope) {
                                    visit(scope);
                                    if (scope.$$nextSibling)
                                        traverse(scope.$$nextSibling);
                                    if (scope.$$childHead)
                                        traverse(scope.$$childHead);
                                }

                                traverse(root);
                                return scopes;
                            }
                            return getScopes($rootScope);
                        },
                        /**
                         * @function openStatusCreator
                         * @memberOf Core
                         * @description TODO
                         */
                        openStatusCreator: function() {
                            //me.panel_statuses.status_creator = true;
                            hslayers_api.gui.StatusCreator.open();
                        },
                        /**
                         * @function searchVisible
                         * @memberOf Core
                         * @param {booelan} is New status of search panel
                         * @returns {Boolean} Current status of Search panel
                         * Test visibility state of search panel. If optional argument is given, change status of search panel.
                         */
                        searchVisible: function(is) {
                            if (arguments.length > 0) {
                                me.panel_statuses['search'] = is;
                            }
                            return me.panel_statuses['search']
                        },
                        /**
                         * @function isAuthorized
                         * @memberOf Core
                         * @returns {Boolean} Check result - true for authorized user
                         * Do authorization check of User
                         */
                        isAuthorized: function() {
                            if (angular.isDefined(window.getLRUser) && window.getLRUser() != 'guest') {
                                return true;
                            }
                            return false;
                        },
                        /**
                         * @function resetMap
                         * @memberOf Core
                         * Do complete reset of map (view, layers) according to app config
                         */
                        resetMap: function() {
                            OlMap.reset();
                            $rootScope.$broadcast('core.map_reset', {});
                        },
                        /**
                         * @function isMobile
                         * @memberOf Core
                         * @returns {String} Returns "mobile" or ""
                         * Test if screen of used device is mobile type (current breakdown is screen width 800px)
                         */
                        isMobile: function() {
                            if (screen.width < 800) {
                                return "mobile";
                            } else {
                                return "";
                            }
                        }
                    };

                    $templateCache.removeAll();

                    if (me.exists('hs.sidebar.controller') /*&& me.puremapApp != true*/) {
                        me.sidebarExpanded = true;
                    }

                    if (me.defaultPanel != '') {
                        me.setMainPanel(me.defaultPanel);
                    }

                    /* HACK: https://github.com/openlayers/ol3/issues/3990 */
                    try {
                        if (typeof require('proj4') != undefined) {
                            require(['proj4'], function() {
                                window.proj4 = proj4
                            });
                        }
                    } catch (ex) {
                        require(['proj4'], function() {
                            window.proj4 = proj4
                        });
                    }
                    
                    /**
                     * @function getSize
                     * @memberOf Core
                     * @params {Object} container Container element to get maximum avaible size for app element
                     * @params {Object} maxSize Maximum configured size of App element
                     * @returns {Object} Computed size of element
                     * (PRIVATE) Transform configured Size of app element to pixel numbers, checks if window is not smaller than app element
                     */
                    function getSize(container, maxSize) {
                        var size = {};
                        if (maxSize.height.indexOf("%") > -1) {
                            size.height = Math.round( container.height() / 100 * maxSize.height.slice(0,-1));
                            size.width = Math.round( container.width() / 100 * maxSize.width.slice(0,-1));
                        }
                        else {
                            maxSize.height.indexOf("px") > -1 ? size.height = maxSize.height.slice(0,-2) : size.height = maxSize.height;
                            if (size.height < container.height()) size.height = container.height();
                            maxSize.width.indexOf("px") > -1 ? size.width = maxSize.width.slice(0,-2) : size.width = maxSize.width;
                            if (size.width < container.width()) size.width = container.width();
                        }
                        return size;
                    };

                    /**
                     * @function changeSize
                     * @memberOf Core
                     * @params {Object} w Angular object containing window, to get window size
                     * @params {Object} element Angular object containing app element
                     * (PRIVATE) Helper function for changing app size
                     */
                    function changeSize(w,element) {
                        var size = getSize(w,me.size);
                        element[0].style.height = size.height + "px";
                        element[0].style.width = size.width + "px";
                        $("#map").height(size.height);
                        me.updateMapSize();
                        if(OlMap.map) OlMap.map.updateSize();
                    };
                    
                    function checkPanelWidth(panel) {
                        if (me.widePanels.indexOf(panel) > -1) {
                            me.sidebarWide = true;
                        }
                        else {
                            me.sidebarWide = false;
                        }
                        if (!$rootScope.$$phase) $rootScope.$digest();
                    };
                    return me;
                },

            ]);
    })
