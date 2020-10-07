var app1 = angular.module('app1',[]);

app1.controller('controllerOne',function ($scope) {
	$scope.randomNumber1 = Math.floor((Math.random() * 10) + 1);
	$scope.randomNumber2 = Math.floor((Math.random() * 10) + 1);
});

app1.controller('goodEmotions',function ($scope) {
	var badMood = ['happy','awe','surprise'];
	$scope.good = badMood[Math.floor((Math.random() * 3))];
});
app1.controller('badEmotions',function ($scope) {
	var goodMood = ['sad','angry','shock'];
	$scope.bad = goodMood[Math.floor((Math.random() * 3))];


});

app1.controller('greatController',function($scope){
	var great = ['bye','tata','see you soon','goodbye'];
	$scope.get = great[Math.floor((Math.random() * 4))];
});