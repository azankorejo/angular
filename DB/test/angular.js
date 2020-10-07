var app1 = angular.module('app1',[]);

app1.controller('mainCtrl',function ($scope) {


	$scope.filterNew = '';

	$scope.filterCheck = function(input){
		$scope.filterNew = input;
		alert($scope.filterNew);
	}


});
