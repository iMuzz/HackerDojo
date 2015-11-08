'use strict';

angular.module('emiratesProjectApp')
  .controller('HeroCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };

  });

angular.module('emiratesProjectApp').directive('triggerTripView', function(){
  return {
    restrict: 'A',
    link: function(scope, el, attrs){

        el.click(function(event){
          event.preventDefault();
          console.log("added class open");
          $(this).parents("body").addClass('open');
        });
    }
  }
});