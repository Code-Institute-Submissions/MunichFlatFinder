angular.module('areaInfoDirective', []).directive('giesing', function () {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/giesing.html',
        replace: true
    };

}).directive('neuhausen', function () {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/neuhausen.html',
        replace: true
    };

}).directive('bogenhausen', function () {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/bogenhausen.html',
        replace: true
    };

}).directive('schwabing', function () {
    return {
        restrict: 'AE',
        templateUrl: 'templates/directives/schwabing.html',
        replace: true
    };
});
