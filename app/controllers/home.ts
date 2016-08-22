import { senthilchandran } from "../app";

export module controllers {
    senthilchandran.controller("homeCtrl", ["$scope",
        ($scope) => {
            $scope.slides = [];
            $scope.slides.push({
                    image: "http://www.senthilchandran.com/content/IngrahamFlats.jpg",
                    id: 0
                },
                {
                    image: "http://www.senthilchandran.com/content/HouseBoat.jpg",
                    id: 1
                },
                {
                    image: "http://www.senthilchandran.com/content/LakeLouise.jpg",
                    id: 2
                });
        }
    ]);
}