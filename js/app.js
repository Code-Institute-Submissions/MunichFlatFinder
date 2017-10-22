var myApp = angular.module("FlatFinderApp", ["ngRoute", "RouteControllers", "AboutSectionDirective"]);

myApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
});    