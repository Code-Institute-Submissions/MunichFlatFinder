angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, $location) {


//When you click on get started, you go to the Find a Flat Section
	$scope.getStarted = function() {
		$location.path("/flatSearch");
	};    	
        

	}).controller('FlatFinderController', function($scope, $location, getListings, FilterService){

//Get the results from the fake Immoscout API and filter the results to get only those matching the selected area
		var URL = "listings.json";
		$scope.clicked = false;

		$scope.getListings = function() {
			getListings(URL).then(function(results) {
				var listingsArr = results.data["resultlist.resultlist"].resultlistEntries[0].resultlistEntry;

				$scope.listingsToShow = FilterService(listingsArr, $scope.area);
				$scope.clicked = true;
				
				
			}).catch( function(err){
				console.log(err);
			});
		};
	});