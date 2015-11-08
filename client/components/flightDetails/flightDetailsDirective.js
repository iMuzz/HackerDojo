angular.module('emiratesProjectApp').directive('flightDetails', function(){
	return {
		restrict: 'E',
		templateUrl: "components/flightDetails/flightDetails.html",
		controller: function($scope) {

			$scope.$on('mapInitialized', function(event, map) {
		      console.log(map);
		    });

		}
	}
});