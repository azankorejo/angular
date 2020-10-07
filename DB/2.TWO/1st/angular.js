var app1 = angular.module('app1',[]);

app1.controller('controllerOne',function ($scope) {
	$scope.groceries = [
		{'item':'potatoes','purchased':true},
		{'item':'tomatoes','purchased':false},
		{'item':'bread','purchased':true},
		{'item':'hummus','purchased':false},
		{'item':'curly flower','purchased':true},
	];

	$scope.addItem = function (newItem) {
		if (!(newItem === undefined || newItem === '')) {
			$scope.groceries.push({
				item:newItem,purchased:false,
			});
			$scope.missingNewItem = '';
		}else{
			$scope.missingNewItem = 'Please Enter An Item';
		}
	}


	// USER FORM VALIDATION
	$scope.users = [
	{
		fName: 'Azan',
		lName: 'Korejo',
		street: '123 street',
		subscribe: 'Subscribe',
		delivery: 'Email',
	}
	];
	$scope.saveUser = function(userInfo){
		if ($scope.userForm.$valid) {
			$scope.users.push({
				fName:userInfo.fName,lName:userInfo.lName,street:userInfo.street,subscribe:userInfo.subscribe,delivery:userInfo.delivery
			});
			console.log('USER SAVED !!!');
		}else{
			console.log("Error : Couldn't save user");
		}
	}


});