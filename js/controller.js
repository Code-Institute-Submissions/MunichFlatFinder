angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, $location) {


//When you click on get started, you go to the Find a Flat Section
	$scope.getStarted = function() {
		$location.path("/flatSearch");
	}    	
        

// //Show the about-section on the first page, only on mobile devices
//     	var currentScreenWidth = $(window).width();
//     	console.log(currentScreenWidth);

//     	$scope.showAbout = false;

//     	if(currentScreenWidth < 1050){
//     		$scope.showAbout = true;

//     	} else {
//     		$scope.showAbout = false;
//     	}
//     	console.log($scope.showAbout);


});