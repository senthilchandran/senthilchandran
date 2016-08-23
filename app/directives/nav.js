define(["require", "exports", "../app"], function (require, exports, app_1) {
    "use strict";
    var directives;
    (function (directives) {
        app_1.senthilchandran.directive("navHelper", ["$location", function ($location) {
                var linkFunction = function (scope, element, attrs) {
                    //change active nav bar item based on click 
                    element.find("li > a").on("click", function (e) {
                        $(e.target).parents(".nav").find("li.active").toggleClass("active");
                        $(e.target).parent().toggleClass("active");
                    });
                    //change active nav bar item based url
                    if ($location.path() && $location.path().length > 1) {
                        element.find("li.active").toggleClass("active");
                        element.find('li > a[href$="' + $location.path() + '"]').parent().toggleClass("active");
                    }
                };
                return {
                    link: linkFunction
                };
            }]);
    })(directives = exports.directives || (exports.directives = {}));
});
