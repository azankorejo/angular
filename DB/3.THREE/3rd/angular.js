var app = angular.module('app1',[])
app.directive("player",function () {
	var directive = {};
	directive.restrict ='E';
	directive.template='{{player.name}} had a {{player.avg}} AVG with {{player.hr}} Homeruns and a {{player.obp}} OBP';
	// directive.scope defines 
	// what is different in template  
	// here alot might be different but name is right to use
	directive.scope = {player : '=name'};
	directive.compile = function (element,attributes) {
		var linkFunc =function($scope,element,attributes){
			element.bind('click',function(){
				element.html('Barry Dissapeared!');
			});
		}
		return linkFunc;
	}
	return directive
});
app.controller('controller',function ($scope) {
	$scope.barryBonds = {name:"Barry Bonds",avg:0.298,hr:762,obp:0.444};
	$scope.hankAaron = {name:"Hank Aaron",avg:0.305,hr:755,obp:0.374};
	$scope.babeRuth = {name:"Babe Ruth",avg:0.342,hr:714,obp:0.474};
	$scope.tedWilliams = {name:"Ted Williams",avg:0.344,hr:521,obp:0.482};
});
