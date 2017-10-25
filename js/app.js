var myApp = angular.module("FlatFinderApp", ["ngRoute", "RouteControllers", "ListingModule"]);

myApp.config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })

    .when('/flatfinder', {
        templateUrl: 'templates/flatfinder.html',
        controller: 'FlatFinderController'
    })

    .when('/faq', {
        templateUrl: 'templates/faq.html',
        controller: 'FAQController'
    });
});    