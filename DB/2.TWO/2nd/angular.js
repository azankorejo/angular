var app1 = angular.module('app1',[]);

app1.controller('controllerOne',function ($scope,$rootScope) {
	$scope.hero = [
	{realName:'Bruce Wayne',heroName:'batman'},
	{realName:'Clark Kent',heroName:'superman'},
	];

	$scope.getHeroData = function (){
		heroSearch($scope.heroName);
	};
	function heroSearch (name) {
		$scope.heroData = 'Not Found';
		for(var i = 0;i < $scope.hero.length;i++){
			if ($scope.hero[i].heroName == name) {
				$scope.heroData = $scope.hero[i].realName + " Is " + $scope.hero[i].heroName;
			}
		}
	}

	$scope.$on("hero updated",function(event,args){
		$scope.hero.push({
			realName:args.realName,heroName:args.heroName,
		});
	});

	$scope.addHeroData = function (heroName ,realName) {
		$rootScope.$broadcast("hero updated",
		{
			realName:realName,heroName,heroName
		}
		);
		console.log('working');
	}
});
