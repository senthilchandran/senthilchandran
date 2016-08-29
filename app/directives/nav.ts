import { senthilchandran } from "../app"
export module directives
{
    senthilchandran.directive("navHelper", ["$location", ($location) => {
        var linkFunction = (scope, element, attrs) => {
            //change active nav bar item based on click 
            element.find("li > a").on("click", (e) => {
                $(e.target).parents(".nav").find("li.active").toggleClass("active");
				$(e.target).parent().toggleClass("active");
		    });
            //change active nav bar item based url
            scope.$on("$routeChangeSuccess", () => {
                if($location.path() && $location.path().length > 0) {
                    element.find("li.active").toggleClass("active");
                    element.find('li > a[href$="' + $location.path() + '"]').parent().toggleClass("active");
                }   
            });
        }

        return {
            link: linkFunction
        };
    }]);
}