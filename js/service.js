angular.module('ListingModule', [])
    .factory('getListings', function($http) {
 
        return function(url) {
        	return $http.get(url);
        };

        })

    .factory("FilterService", function(){
    	return function(listingsArr, area) {
    		var  listingsToShow = [];
			var filteredListingsArr = listingsArr.filter(x => x["resultlist.realEstate"].address.quarter === area);

			filteredListingsArr.forEach(function(listing) {
			
			//Create a listing object with information to use
			var flat = {};

			//get the coordonates
			flat.lat = listing["resultlist.realEstate"].address.wgs84Coordinate.latitude;
			flat.long = listing["resultlist.realEstate"].address.wgs84Coordinate.longitude;

			//get the data for the list

			listingsToShow.push(flat);

			});

			return listingsToShow;
    	};
    });

