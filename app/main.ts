/// <reference path="./typings/angular.d.ts" />
/// <reference path="./typings/angular-route.d.ts" />
/// <reference path="./typings/require.d.ts" />

var config = {
    app: "app",
    appName: "senthilchandran",
    culture: "",
    serviceConfig: "",
    controllers: { home: "controllers/home" },
    services: {},
    directives: { nav: "directives/nav"},
    filters: {},
    ngConstant: { $scope: "$scope" },
    libs: {}
};

var requireconfig = {
    baseUrl: ".",
    waitSeconds: 100,
    urlArgs: "v0-8292016"
};

require.config(requireconfig);

(() => {
    require([config.app, config.controllers.home, config.directives.nav],
    () => {
        angular.bootstrap(document, [config.appName]);
    });
})();
