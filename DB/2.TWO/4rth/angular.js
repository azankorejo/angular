var app1 = angular.module('app1',[
	'weatherFilters',
	]);

app1.controller('mainCtrl',function ($scope) {
	$scope.students = [
		{name:'Susan',gpa:3.5},
		{name:'Brad',gpa:2.5},
		{name:'Derek',gpa:3.3},
		{name:'John',gpa:2.9},
		{name:'Amanda',gpa:3.1},
	];
		$scope.student = {
		gpa:[
			{name:'Susan',gpa:3.5},
			{name:'Brad',gpa:2.5},
			{name:'Derek',gpa:3.3},
			{name:'John',gpa:2.9},
			{name:'Amanda',gpa:3.1},
		]
		};
	$scope.currDate = new Date();
	$scope.randomStr = 'lorem ipsum is a dummy text for commercial use';

	$scope.randomArray = [
		'tomatoes',
		'potatoes',
		'Curly Flower',
		'Bread',
		'Ketchup',
	];	

	// Custom FILTER
	$scope.weather = [
		{day:'monday',rain:false},
		{day:'tuesday',rain:true},
	];
});
