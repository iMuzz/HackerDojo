'use strict';

angular.module('emiratesProjectApp')
  .controller('TripsCtrl', function ($scope, $location, tripDataFactory) {

    $scope.trips = tripDataFactory;
    $scope.chosenTrip = {};
    $scope.detailsIsShown = { val: false};

    $scope.view1 = true;
    $scope.view2 = false;

    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.headerText = "Select your flight";

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.showTripDetail = function(trip){
      console.log("Trip chosen: ", trip);
      $scope.detailsIsShown.val = true;
      $scope.chosenTrip = trip;
    };

    $scope.close = function(){
        $scope.detailsIsShown.val = false;
        console.log("This should be closed!");
    };

    // Show the next in the buy process
    $scope.toggleView = function(){
      console.log("Next view");
      $scope.view1 = !$scope.view1;
      $scope.view2 = !$scope.view2;
    };

    $scope.nextView = function(){
      if ($scope.view1) {
        $scope.toggleView();
        $scope.headerText = "Select your stay";
        $('.button-nav-bar .button:nth-child(2)').addClass('button--green').text("Checkout");
      }
    };

    $scope.previousView = function(){
      if ($scope.view2) {
        $scope.toggleView();
        $scope.headerText = "Select your flight";
        $('.button-nav-bar .button:nth-child(2)').removeClass('button--green').text("Next");
      };
    };

  });