var app = angular.module('app1',["ngSanitize"]);


app.controller('mainController',function($scope,$window,$location,$interval,$log,$exceptionHandler,$sanitize){
	$scope.greetUser = function(userName){
		// WINDOW SERVICE
		$window.alert("HELLO" +" "+ angular.uppercase(userName));
	}


	// LOCATION SERVICE
	
	$scope.currentURL 	=  $location.absUrl();
	$scope.theProtocol	=  $location.protocol();
	$scope.currentHost 	=  $location.host();
	$scope.currentPost 	=  $location.port();
	$location.path('#/the/path');
	$scope.currentPath = $location.path();
	$location.search("random=stuff");
	$scope.currentSearch =$location.search();


// INTERVAL SERVICE

	$interval(function(){
		var hour = new Date().getHours();
		var minutes = ('0' + new Date().getMinutes()).slice(-2);
		var seconds = ('0' + new Date().getSeconds()).slice(-2);
		$scope.time = hour+":"+minutes+":"+seconds;

	},1000);


	// lOG SERVICE
	$scope.$log = $log;


	// EXCEPTION HANDLER SERVICE
	$scope.throwException = function(){
		try{
			throw new Error('Exception Thrown');
		}
		catch(e){
		$exceptionHandler(e.message,'Caught Exception')
		}
	}



// SANITIZATION SERVICE
	$scope.badStuff = "";


// CUSTOM SANITIZATION SERVICE

	$scope.$watch("badStuff",function(value){
		$scope.htmlDAta = $sanitize(value)
	});

	// COMPILE SERVICE

	$scope.players = [
	 {name:"Barry Bonds",avg:0.298,hr:762,obp:0.444},
	 {name:"Hank Aaron",avg:0.305,hr:755,obp:0.374},
	 {name:"Babe Ruth",avg:0.342,hr:714,obp:0.474},
	 {name:"Ted Williams",avg:0.344,hr:521,obp:0.482},
	];

});
	// COMPILE SERVICE DIRECTIVE

app.directive('getPlayerInfo',function($compile){
	return function (scope,element,attrs) {
		var playerList = "<ul><li ng-repeat='player in players'>{{player.name}}</li></ul>";
		var listElem = angular.element(playerList);

		var compileFunc = $compile(listElem);

		compileFunc(scope);

		element.append(listElem);
	}
});	