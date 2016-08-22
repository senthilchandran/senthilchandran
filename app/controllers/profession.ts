import { senthilchandran } from "../app"

export module controllers {
    senthilchandran.register.controller("professionCtrl", ["$scope",
        ($scope) => {
            $scope.title = "Profession";
        }
    ]);
}