/// <reference path="main.ts" />

export interface ISenthilChandran extends ng.IModule {
    register: {
        controller: (...args: any[]) => ng.IControllerProvider;
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

senthilchandran.config(["$routeProvider", "$controllerProvider", ($routeProvider, $controllerProvider) => {

    senthilchandran.register = {
        controller: $controllerProvider.register
    };

    $routeProvider.when("/", {
            templateUrl: "views/home.html",
            controller: "homeCtrl"
        }).when("/about", {
            templateUrl: "views/about.html",
            controller: "aboutCtrl",
            resolve: {
                load: ["$q", "$rootScope",  ($q, $rootScope)=> {
                    return loadDependencies($q, $rootScope, ["controllers/about.js"]);
                }]
            }
        }).when("/profession", {
            templateUrl: "views/profession.html",
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
