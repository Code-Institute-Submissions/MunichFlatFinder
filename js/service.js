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

			filteredListingsArr.forEach(function(listing, position) {
			
			//Create a listing object with information to use
			var flat = {};

			//get the coordonates (to add ---> what happens if no coordinates)

			flat.lat = listing["resultlist.realEstate"].address.wgs84Coordinate.latitude;
			flat.long = listing["resultlist.realEstate"].address.wgs84Coordinate.longitude;

			//get the data for the list
			flat.link = listing["@xlink.href"];
			flat.title = listing["resultlist.realEstate"].title;
			flat.warmRent = listing["resultlist.realEstate"].calculatedPrice.value;
			flat.livingspace = listing["resultlist.realEstate"].livingSpace;
			flat.rooms = listing["resultlist.realEstate"].numberOfRooms;
			flat.nb = position +1;

			listingsToShow.push(flat);

			});

			return listingsToShow;
    	};
    });

