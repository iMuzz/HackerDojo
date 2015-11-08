angular.module('emiratesProjectApp').directive('lodgeDetails', function(){
	return {
		restrict: 'E',
		scope: {
			lodge: "="		
		},
		templateUrl: "components/lodgeDetails/lodgeDetails.html"
	}
});