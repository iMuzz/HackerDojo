angular.module('emiratesProjectApp').directive('lodgeSelector', function(){
	return {
		restrict: 'E',
		templateUrl: "components/lodgeSelector/lodgeSelector.html",
		scope: {
			lodges: "="
		}
	}
});