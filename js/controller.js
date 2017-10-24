angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, $location) {


//When you click on get started, you go to the Find a Flat Section
	$scope.getStarted = function() {
		$location.path("/flatSearch");
	}    	
        





	}).controller('FlatFinderController', function($scope, $location, UserAPIService){


//Get the results from the fake Immoscout API and filter the results to get only those matching the selected area
		var URL = "listings.json";
		var area = $scope.area;

		$scope.getListings = function() {
			UserAPIService.callImmoListings(URL).then(function(results){
				var listingsArr = results.data["resultlist.resultlist"].resultlistEntries[0].resultlistEntry;

				var filteredListingsArr = listingsArr.filter(x => x["resultlist.realEstate"].address.quarter === $scope.area);

				filteredListingsArr.forEach(function(listing) {

				//get the coordonates
					var lat = listing["resultlist.realEstate"].address.wgs84Coordinate.latitude;
					var long = listing["resultlist.realEstate"].address.wgs84Coordinate.longitude;

				//get the data for the list

				});

			}).catch(function(err){
				console.log(err);
			});
		};

	});