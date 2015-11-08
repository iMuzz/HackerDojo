angular.module('emiratesProjectApp').directive('lodgeSelector', function(){
	return {
		restrict: 'E',
		templateUrl: "components/lodgeSelector/lodgeSelector.html",
		scope: {
			lodges: "="
		},
		link: function(scope, el, attrs) {
			scope.detailsIsShown = false;
			// 
			scope.viewLodge = function(lodge){
				console.log("viewLodge called: ", lodge);
				scope.detailsIsShown = true;
			};

			scope.close = function(){
				console.log("CLOSE THE DETAILS!");
				scope.detailsIsShown = false;
			}
		}
	}
});