angular.module('emiratesProjectApp').directive('flightDetails', function(){
	return {
		restrict: 'E',
		templateUrl: "components/flightDetails/flightDetails.html",
		scope: {
			roundtripFlight: "=",
			totalPrice: "="
		},
		link: function(scope, el, attrs){

		}
	}
});