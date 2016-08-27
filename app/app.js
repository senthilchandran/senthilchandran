/// <reference path="main.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.senthilchandran = angular.module("senthilchandran", [
        "ngRoute",
        "ui.bootstrap"
    ]);
    var loadDependencies = function ($q, $rootScope, dependencies) {
        var defer = $q.defer();
        require(dependencies, function () {
            defer.resolve();
            $rootScope.$apply();
        });
        return defer.promise;
    };
    exports.senthilchandran.config(["$routeProvider", "$controllerProvider", "$compileProvider", function ($routeProvider, $controllerProvider, $compileProvider) {
            exports.senthilchandran.register = {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive
            };
            $routeProvider.when("/", {
                templateUrl: "views/home.html?" + requireconfig.version,
                controller: "homeCtrl"
            }).when("/about", {
                templateUrl: "views/about.html?" + requireconfig.version,
                controller: "aboutCtrl",
                resolve: {
                    load: ["$q", "$rootScope", function ($q, $rootScope) {
                            return loadDependencies($q, $rootScope, ["controllers/about.js"]);
                        }]
                }
            }).when("/profession", {
                templateUrl: "views/profession.html?" + requireconfig.version,
                controller: "professionCtrl",
                resolve: {
                    load: ["$q", "$rootScope", function ($q, $rootScope) {
                            return loadDependencies($q, $rootScope, ["controllers/profession.js"]);
                        }]
                }
            }).
                otherwise({
                redirectTo: "/"
            });
        }]);
    exports.senthilchandran.run(["$rootScope", "$window", function ($rootScope, $window) {
        }]);
});
