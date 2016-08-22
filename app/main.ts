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
    directives: {},
    filters: {},
    ngConstant: { $scope: "$scope" },
    libs: {}
};

var requireconfig = {
    baseUrl: ".",
    waitSeconds: 100
};

require.config(requireconfig);

(() => {
    require([config.app, config.controllers.home],
    () => {
        angular.bootstrap(document, [config.appName]);
    });
})();
