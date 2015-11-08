angular.module('emiratesProjectApp').directive('lodgeSelector', function(){
	return {
		restrict: 'E',
		templateUrl: "components/lodgeSelector/lodgeSelector.html",
		scope: {
			lodges: "=",
		},
		link: function(scope, el, attrs) {
			scope.selectedLodge = {};
			scope.viewLodge = function(lodge){
				console.log("viewLodge called: ", lodge);
				scope.selectedLodge = lodge;
			};

			var clear = scope.$watchCollection('lodges', function(newVals, oldVals){
				console.log("Ran!");
				if (newVals) {
					scope.selectedLodge = newVals[0];
					clear();
				};
			});
		}
	}
});