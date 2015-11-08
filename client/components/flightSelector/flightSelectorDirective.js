angular.module('emiratesProjectApp').directive('flightSelector', function(){
	return {
		restrict: 'E',
		templateUrl: "components/flightSelector/flightSelector.html",
		scope: {
			roundtripFlights: "="
		},
		link: function(scope, el, attrs){

			scope.selectedRoundtripFlight = {};

			scope.viewFlight = function(roundtripFlight){
				console.log("viewFlight called: ", roundtripFlight);
				scope.selectedRoundtripFlight = roundtripFlight;
			};

			var clear = scope.$watchCollection('roundtripFlights', function(newVals, oldVals){
				console.log("roundtripFlights watch started!");
				if (newVals) {
					scope.selectedRoundtripFlight = newVals[0];
					clear();
				};
			});

		}
	}
});