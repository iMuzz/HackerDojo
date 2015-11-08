'use strict';

angular.module('emiratesProjectApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ng-backstretch',
  'daterangepicker'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
