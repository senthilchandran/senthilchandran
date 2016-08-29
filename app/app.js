/// <reference path="main.ts" />
define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.senthilchandran = angular.module("senthilchandran", [
        "ngRoute",
        "ui.bootstrap",
        "ngAnimate"
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
                templateUrl: "views/home.html?" + requireConfig.urlArgs,
                controller: "homeCtrl"
            }).when("/about", {
                templateUrl: "views/about.html?" + requireConfig.urlArgs,
                controller: "aboutCtrl",
                resolve: {
                    load: ["$q", "$rootScope", function ($q, $rootScope) {
                            return loadDependencies($q, $rootScope, ["controllers/about.js"]);
                        }]
                }
            }).when("/profession", {
                templateUrl: "views/profession.html?" + requireConfig.urlArgs,
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
