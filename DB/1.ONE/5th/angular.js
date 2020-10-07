var app1 = angular.module('app1',[]);

app1.controller('controllerOne',function ($scope) {
	$scope.dayTimeButton = true;

	
	$scope.capitals = [
		{'city':'Hyderabad','state':'SD'},
		{'city':'Lahore','state':'Punjab'},
		{'city':'Peshawar','state':'khyber pakhtunkhwa'},
		{'city':'Quetta','state':'balouchistan '},
	];
});
