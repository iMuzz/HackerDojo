angular.module('emiratesProjectApp').directive('flightDetails', function(){
	return {
		restrict: 'E',
		templateUrl: "components/flightDetails/flightDetails.html",
		scope: {
			roundtripFlight: "="
		},
		link: function(scope, el, attrs){

		}
	}
});