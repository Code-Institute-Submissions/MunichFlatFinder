angular.module('RouteControllers', [])
    .controller('HomeController', function ($scope, $location) {


//When you click on get started, you go to the Find a Flat Section
        $scope.getStarted = function () {
            $location.path('/flatfinder');
        };

    }).controller('FlatFinderController', function ($scope, $location, getListings, FilterService) {
//Get the results from the fake Immoscout API and filter the results to get only those matching the selected area
    var URL = 'listings.json';
    $scope.clicked = false;
    $scope.area = '';

    $scope.getListings = function () {

        if ($scope.area === '') {
            alert('Select an area');

        } else {

            getListings(URL).then(function (results) {
                var listingsArr = results.data[ 'resultlist.resultlist' ].resultlistEntries[ 0 ].resultlistEntry;
                $scope.listingsToShow = FilterService(listingsArr, $scope.area);
                $scope.clicked = true;

                var filteredArr = $scope.listingsToShow;

                //Once we have the filtered results, we initiate the map and show the items on the map
                var map;
                var bounds = new google.maps.LatLngBounds();
                var markers = [];
                var munich = { lat: 48.141181, lng: 11.579338 };

                map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 13,
                    center: munich
                });

                for (let i = 0; i < filteredArr.length; i++) {
                    var marker = [];
                    marker.push(String(filteredArr[ i ].nb));
                    marker.push(filteredArr[ i ].latLng.lat);
                    marker.push(filteredArr[ i ].latLng.lng);
                    markers.push(marker);
                }

                // Loop through our array of markers & place each one on the map - I received help from another Code Institute for the code below
                for (let i = 0; i < markers.length; i++) {
                    var position = new google.maps.LatLng(markers[ i ][ 1 ], markers[ i ][ 2 ]);
                    bounds.extend(position);
                    marker = new google.maps.Marker({
                        position: position,
                        map: map,
                        title: markers[ i ][ 0 ],
                        label: markers[ i ][ 0 ]
                    });

                    map.fitBounds(bounds);

                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
}).controller('FAQController', function () {

}).controller('ContactController', function ($scope) {

    $scope.contactFormUser = {};

    $scope.submitContactForm = function () {
        if ($scope.contactForm.$valid) {
            $scope.contactFormUser.name = $scope.user.name;
            $scope.contactFormUser.email = $scope.user.email;
        }
        alert('The contact form was not sent - please contact me through linkedin :)');
    };
});
