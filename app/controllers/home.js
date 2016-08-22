define(["require", "exports", "../app"], function (require, exports, app_1) {
    "use strict";
    var controllers;
    (function (controllers) {
        app_1.senthilchandran.controller("homeCtrl", ["$scope",
            function ($scope) {
                $scope.slides = [];
                $scope.slides.push({
                    image: "http://www.senthilchandran.com/content/IngrahamFlats.jpg",
                    id: 0
                }, {
                    image: "http://www.senthilchandran.com/content/HouseBoat.jpg",
                    id: 1
                }, {
                    image: "http://www.senthilchandran.com/content/LakeLouise.jpg",
                    id: 2
                });
            }
        ]);
    })(controllers = exports.controllers || (exports.controllers = {}));
});
