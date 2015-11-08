angular.module('emiratesProjectApp').directive('lodgeSelector', function(){
	return {
		restrict: 'E',
		templateUrl: "components/lodgeSelector/lodgeSelector.html",
		scope: {
			lodges: "="
		},
		link: function(scope, el, attrs) {

			// 
			scope.viewLodge = function(lodge){
				console.log("viewLodge called: ", lodge);
			}
		}
	}
});