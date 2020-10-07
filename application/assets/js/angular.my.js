var app = angular.module('app',[]);


app.controller('mainController',function ($scope) {
	$scope.appName='Angular Js';
	$scope.data = [
		{name:'Home',url:'/home.html'},
		{name:'About',url:'/about.html'},
		{name:'Contact Us',url:'/contact_us.html'},
	];
	$scope.toggleBtn = function ($event) {
		var el = angular.element(document.querySelector('#btnChange'));
		if (el) {
			$scope.trueVal = true;
		}else{
			$scope.trueVal = false;

		}
	};
});