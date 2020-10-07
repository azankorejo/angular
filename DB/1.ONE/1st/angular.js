var app1 = angular.module('app1',[]);

app1.controller('controllerOne',function ($scope) {
	// variables
	$scope.first = 1;
	$scope.second = 1;

	// Event Function
	$scope.updateFunction = function () {
		$scope.calculation = $scope.first + ' + ' + $scope.second + ' = ' + (+$scope.first + +$scope.second); 
	}
});