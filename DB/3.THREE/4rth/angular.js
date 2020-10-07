var app = angular.module('app1',[])

app.directive('exDir',function(){
	return{
		transclude:true,
		template:"<div><h4>{{moreLorem}}</h4></div><div ng-transclude></div>"

	};
});

app.controller('controller',function ($scope) {
	$scope.moreLorem = 'LOREM IPSUM IS A DUMMY TEXT FOR COMMERCIAL USE';
	
});
