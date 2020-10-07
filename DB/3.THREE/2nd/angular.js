angular.module('app1',[])
.directive("bbPlayerList",function () {
	return function(scope,element,attrs){
		var data = scope[attrs["bbPlayerList"]];
		if (angular.isArray(data)) {
			var arrayItem = attrs['arrayItem'];
			var listElem = angular.element("<ul>");
			element.append(listElem);
			for (var i = 0;i < data.length ; i++) {
				listElem.append(angular.element('<li>').text(scope.$eval(arrayItem,data[i])))
			}
			listElem.after(angular.element('<span id="mays"></span>').text('Willy mays'));
			listElem.prepend(angular.element('<span id="cob"></span>').text('Ty Cobs'));


			// ADD CSS IN ELEMENT

			// angular.element(document.querySelector('#mays')).css('color','green');


			// REMOVING A ELEMENT

			// angular.element(document.querySelector('#mays')).remove();

			// REPLACING A ELEMENT
			
			// var person = '<span id="lou">Lou Gehrig</span>';
			// var replace = angular.element(person);
			// angular.element(document.querySelector('#mays')).replaceWith(replace);
		}
	}
})
.controller('controllerOne',function ($scope) {

	$scope.bbPlayers = [
		{name:"Barry Bonds",avg:0.298,hr:762,obp:0.444},
		{name:"Hank Aaron",avg:0.305,hr:755,obp:0.374},
		{name:"Babe Ruth",avg:0.342,hr:714,obp:0.474},
		{name:"Ted Williams",avg:0.344,hr:521,obp:0.482},
	];

});
