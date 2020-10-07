var app = angular.module('app1',[])

app.service('HelloService',function () {
	this.helloService = function(){
		console.log('hello Service');
	};
});



app.factory('HelloFactory',function(){
	var factory = {};

	factory.helloFactory = function(){
		console.log('hello factory');
	};
	return factory;
	
});

app.controller('mainController',function(HelloService,HelloFactory){
	HelloService.helloService();
	HelloFactory.helloFactory();
});