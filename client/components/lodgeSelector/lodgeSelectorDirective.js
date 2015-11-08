angular.module('emiratesProjectApp').directive('lodgeSelector', function(){
	return {
		restrict: 'E',
		templateUrl: "components/lodgeSelector/lodgeSelector.html",
		scope: {
			lodges: "=",
		},
		link: function(scope, el, attrs) {
			scope.selectedLodge = {};

			var old_active;

			scope.viewLodge = function(lodge){
				console.log("viewLodge called: ", lodge);
				scope.selectedLodge = lodge;
				
				if(old_active != undefined) {
					$(old_active).removeClass("active");
				}

				old_active = event.currentTarget;
				$(event.currentTarget).addClass("active");
			};


			var clear = scope.$watchCollection('lodges', function(newVals, oldVals){
				if (newVals) {
					scope.selectedLodge = newVals[0];
					clear();
				};
			});
		}
	}
});