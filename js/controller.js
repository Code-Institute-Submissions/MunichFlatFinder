angular.module('RouteControllers', [])
    .controller('HomeController', function($scope, $location) {


//When you click on get started, you go to the Find a Flat Section
	$scope.getStarted = function() {
		$location.path("/flatSearch");
	};    	
        

	}).controller('FlatFinderController', function($scope, $location, getListings, FilterService){
//Map functions - adapted from the Google Maps API Documentation	


//Get the results from the fake Immoscout API and filter the results to get only those matching the selected area
		var URL = "listings.json";
		$scope.clicked = false;

		$scope.getListings = function() {
			getListings(URL).then(function(results) {
				var listingsArr = results.data["resultlist.resultlist"].resultlistEntries[0].resultlistEntry;
				$scope.listingsToShow = FilterService(listingsArr, $scope.area);
				$scope.clicked = true;

				var filteredArr = $scope.listingsToShow;

				var munich = { lat: 48.141181, lng: 11.579338};
	    		var my_map = new google.maps.Map(document.getElementById('map'), {
	          		zoom: 13,
	          		center: munich
	          	});

				//add a label for each flat
				for(let i=0; i<filteredArr.length; i++){
					var marker = new google.maps.Marker({
          				position: filteredArr[i].coord,
         				label: String(filteredArr[i].nb),
          				Setmap: my_map
          			});
          			console.log(marker);
				}

				
			}).catch( function(err){
				console.log(err);
			});
		};


	});