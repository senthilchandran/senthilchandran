import { senthilchandran } from "../app"

export module controllers {
    senthilchandran.register.controller("aboutCtrl", ["$scope",
        ($scope) => {
            $scope.title = "About";
        }
    ]);
}