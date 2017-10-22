angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, $location) {
        

//Show the about-section on the first page, only on mobile devices
    	var currentScreenWidth = $(window).width();
    	console.log(currentScreenWidth);

    	$scope.showAbout = false;

    	if(currentScreenWidth < 1000){
    		$scope.showAbout = true;

    	} else {
    		$scope.showAbout = false;
    	}
    	console.log($scope.showAbout);
});