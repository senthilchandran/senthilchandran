define(["require", "exports", "../app"], function (require, exports, app_1) {
    "use strict";
    var controllers;
    (function (controllers) {
        app_1.senthilchandran.controller("homeCtrl", ["$scope", "$uibModal",
            function ($scope, $uibModal) {
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
                $scope.modalInstance = null;
                $scope.showMiracleModal = function () {
                    $scope.modalInstance = $uibModal.open({
                        templateUrl: "/views/templates/miracle.html"
                    });
                };
            }
        ]);
    })(controllers = exports.controllers || (exports.controllers = {}));
});
