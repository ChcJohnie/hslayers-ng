/**
 * @namespace hs.mobile_settings
 * @memberOf hs
 */
define(['angular', 'core'],

    function(angular) {
        angular.module('hs.mobile_settings', ['hs.core'])
            /**
            * @memberof hs.mobile_settings
            * @ngdoc directive
            * @name hs.mobileSettings.directive
            * @description TODO
            */
            .directive('hs.mobileSettings.directive', function() {
                return {
                    templateUrl: hsl_path + 'components/mobile_settings/partials/mobile_settings.html?bust=' + gitsha
                };
            })

        /**
        * @memberof hs.mobile_settings
        * @ngdoc controller
        * @name hs.mobile_settings.controller
        * @description TODO
        */
        .controller('hs.mobile_settings.controller', ['$scope', 'config', 'Core', 'hs.map.service', '$window',
            function($scope, config, Core, OlMap, $window) {
                $scope.Core = Core;
                configDebug = config;
                $scope.settingsDb = settingsDb;
                $scope.originalHostnames = $.extend({}, config.hostname);
                $scope.hostnames = config.hostname;

                /**
                 * @function addHostname
                 * @memberOf hs.mobile_settings.controller
                 * @description TODO
                 */
                $scope.addHostname = function() {
                    if ($scope.userHostname) {
                        config.hostname["user"] = {
                            "title": "User hostname",
                            "type": "user",
                            "editable": true,
                            "url": $scope.userHostname
                        };
                        settingsDb.transaction(function(tx) {
                            tx.executeSql('REPLACE INTO Hostnames VALUES (?,?,?,?)', [config.hostname.user.title, config.hostname.user.type, config.hostname.user.editable, config.hostname.user.url], function(tx, result) {
                                $scope.userHostname = "";
                                console.log(result.insertId);
                            });
                        });
                    }
                }

                /**
                 * @function deleteHostname
                 * @memberOf hs.mobile_settings.controller
                 * @description TODO
                 */
                $scope.deleteHostname = function() {
                    delete $scope.hostnames[this.hostname.type];
                    $scope.deleteRow(settingsDb, this.hostname.type);
                }

                /**
                 * @function preFill
                 * @memberOf hs.mobile_settings.controller
                 * @description TODO
                 */
                $scope.preFill = function() {
                    $scope.userHostname = !$scope.userHostname ? "http://" : $scope.userHostname;
                }

                /**
                 * @function removePreFill
                 * @memberOf hs.mobile_settings.controller
                 * @description TODO
                 */
                $scope.removePreFill = function() {
                    $scope.userHostname = $scope.userHostname == "http://" ? "" : $scope.userHostname;
                }

                /**
                 * @function initSettings
                 * @memberOf hs.mobile_settings.controller
                 * @params {Unknown} db
                 * @description TODO
                 */
                $scope.initSettings = function(db) {
                    if (console) {
                        console.log("Populating hostnames database.");
                        console.log($scope.hostnames);
                        console.log(config.hostname);
                        console.log(settingsDb);
                        config.hostname = $.extend({}, $scope.originalHostnames);
                    }
                    $scope.hostnames = config.hostname;

                    db.transaction(function(tx) {
                        tx.executeSql('DROP TABLE IF EXISTS Hostnames', [], console.log("Dropping hostnames table."));
                        tx.executeSql('CREATE TABLE IF NOT EXISTS Hostnames (title unique, type, editable, url)', [], console.log("Creating hostnames table."));
                        $.each($scope.hostnames, function(key, value) {
                            tx.executeSql('INSERT INTO Hostnames VALUES (?,?,?,?)', [value.title, value.type, value.editable, value.url]);
                        });
                    }, function() {
                        //TODO Error
                    });
                }

                /**
                 * @function loadSettingsFromDb
                 * @memberOf hs.mobile_settings.controller
                 * @params {unknown} tx
                 * @description TODO
                 */
                $scope.loadSettingsFromDb = function(tx) {
                    dbHostnames = {};
                    tx.executeSql('SELECT * FROM Hostnames', [], function(tx, results) {
                        // console.log(results.rows.length + ' rows found.');
                        for (var i = 0; i < results.rows.length; i++) {
                            // console.log(results.rows.item(i));
                            dbHostnames[results.rows.item(i).type] = {
                                "title": results.rows.item(i).title,
                                "type": results.rows.item(i).type,
                                "editable": JSON.parse(results.rows.item(i).editable),
                                "url": results.rows.item(i).url
                            }
                        }
                    });
                }

                /**
                 * @function deleteRow
                 * @memberOf hs.mobile_settings.controller
                 * @params {Unknown} db
                 * @params {Unknown} type
                 * @description TODO
                 */
                $scope.deleteRow = function(db, type) {
                    db.transaction(function(tx) {
                        tx.executeSql('DELETE FROM Hostnames WHERE type = ?', [type]);
                    });
                }

                settingsDb.transaction($scope.loadSettingsFromDb, function(error) {
                    console.log(error);
                    $scope.initSettings(settingsDb);
                    console.log("Loading initial settings.");
                }, function() {
                    if (Object.keys(dbHostnames)[0]) {
                        config.hostname = dbHostnames;
                        $scope.hostnames = config.hostname;
                        console.log("Loading settings from memory.");
                    }
                });

                $scope.$on('scope_loaded', function() {
                    // $("#loading-logo")[0].removeChild($("svg")[0]);
                    $("#loading-logo").remove();
                });

                $scope.$emit('scope_loaded', "Mobile Settings");
            }

        ]);
    })
