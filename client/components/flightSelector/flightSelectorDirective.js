angular.module('emiratesProjectApp').directive('flightSelector', function(){
	return {
		restrict: 'E',
		templateUrl: "components/flightSelector/flightSelector.html",
		scope: {
			roundtripFlights: "="
		},
		link: function(scope, el, attrs){

			scope.selectedRoundtripFlight = {};
			var old_active;

			scope.viewFlight = function(roundtripFlight){
				console.log("viewFlight called: ", roundtripFlight);
				//scope.selectedRoundtripFlight = roundtripFlight;

				if(old_active != undefined) {
					$(old_active).removeClass("active");
				}

				old_active = event.currentTarget;
				$(event.currentTarget).addClass("active");
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