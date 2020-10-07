angular.module('app1',[])
.directive("jqlDirective",function () {
	return function($scope,element,attrs){
		var players = element.children();

		var listOfPlayers = "";
		for(i = 0; i < players.length; i++){
			if (players.eq(i).text() == 'Barry Bonds' ) {
				players.eq(i).css('color','red');

				players.eq(i).attr('number','25');
			}
			if (players.eq(i).text() == 'Hank Aaron') {
				players.eq(i).addClass('thick');
			}
			listOfPlayers += players.eq(i).text() + ",";
			angular.element(document.querySelector('#ChildrenList')).text(listOfPlayers);

			var barrysNum = angular.element(document.querySelector('#barry')).attr('number');

			angular.element(document.querySelector('#barrysNumber')).text(barrysNum);

			angular.element(document.querySelector('#hank')).removeClass('thick');

			var bold = angular.element(document.querySelector('#hank')).hasClass('thick');

			angular.element(document.querySelector('#hankBold')).text(bold);

			var barryId = angular.element(document.querySelector('#barry')).prop('id');

			angular.element(document.querySelector('#barrysId')).text(barryId);



		}
	}
})
.controller('controllerOne',function ($scope,$rootScope) {

	$scope.unbold = function(){
		angular.element(document.querySelector('#hank')).toggleClass('thick');
	}

});
