angular.module('emiratesProjectApp').directive('mapView', function(){
	return {
		restrict: 'E',
		templateUrl: "components/mapView/mapView.html",
		controller: function($scope) {
			$scope.$on('mapInitialized', function(event, map) {
		      console.log(map);
		    });
		}
	}
});