angular.module('emiratesProjectApp').directive('lodgeDetails', function(){
	return {
		restrict: 'E',
		scope: {
			lodge: "="		
		},
		templateUrl: "components/lodgeDetails/lodgeDetails.html",
		link: function(scope, el, attrs){
			// scope.$watch('lode')
		}
	}
});