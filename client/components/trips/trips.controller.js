'use strict';

angular.module('emiratesProjectApp')
  .controller('TripsCtrl', function ($scope, $location, tripDataFactory) {

    $scope.trips = tripDataFactory;
    $scope.chosenTrip = {};
    $scope.detailsIsShown = { val: false};

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.showTripDetail = function(trip){
      console.log("Trip chosen: ", trip);
      $scope.detailsIsShown.val = true;
      $scope.chosenTrip = trip;
    }

    $scope.close = function(){
        $scope.detailsIsShown.val = false;
        console.log("This should be closed!");
    }
  });