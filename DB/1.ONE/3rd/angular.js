var app1 = angular.module('app1',[]);

app1.controller('controllerOne',function ($scope) {
	$scope.groceries =[
		{item:'Tomatoes',purchased:false},
		{item:'Potatoes',purchased:true},
		{item:'Curly Flower',purchased:false},
		{item:'Bread',purchased:true},
		{item:'Hummus',purchased:false},
	];

	$scope.getList = function () {
		return $scope.showList ? 'ulgrocerieslist.html':'grocerieslist.html';
	};
});
