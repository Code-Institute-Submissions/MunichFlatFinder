angular.module('UserService', [])
    .factory('UserAPIService', function($http) {
 
        UserAPIService = {
            callImmoListings: function(url) {
                return $http.get(url);
            }
        };
        return UserAPIService;
    });