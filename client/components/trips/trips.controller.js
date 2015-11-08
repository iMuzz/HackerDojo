'use strict';

angular.module('emiratesProjectApp')
  .controller('TripsCtrl', function ($scope, $location, tripDataFactory) {

    $scope.trips = tripDataFactory;
    
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.showDetails = function(){
      
    }
  });