/// <reference path="main.ts" />

declare var requireConfig;

export interface ISenthilChandran extends ng.IModule {
    register: {
        controller: (...args: any[]) => ng.IControllerProvider;
        directive: (...args: any[]) => ng.ICompileProvider;
    }
}

export var senthilchandran = <ISenthilChandran> angular.module("senthilchandran", [
    "ngRoute",
    "ui.bootstrap"
]);

var loadDependencies = ($q, $rootScope, dependencies): any => {
    var defer = $q.defer();
    require(dependencies, () => {
        defer.resolve();
        $rootScope.$apply()
    });
    return defer.promise;
};

senthilchandran.config(["$routeProvider", "$controllerProvider", "$compileProvider", ($routeProvider, $controllerProvider, $compileProvider) => {
    senthilchandran.register = {
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
                load: ["$q", "$rootScope",  ($q, $rootScope)=> {
                    return loadDependencies($q, $rootScope, ["controllers/about.js"]);
                }]
            }
        }).when("/profession", {
            templateUrl: "views/profession.html?" + requireconfig.version,
            controller: "professionCtrl",
        resolve: {
            load: ["$q", "$rootScope",  ($q, $rootScope)=> {
                return loadDependencies($q, $rootScope, ["controllers/profession.js"]);
            }]
        }
        }).
        otherwise({
            redirectTo: "/"
        });



}]);

senthilchandran.run(["$rootScope", "$window", ($rootScope, $window) => {
}]);
