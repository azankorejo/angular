var app1 = angular.module('app1',[]);

app1.controller('controllerOne',function (	) {
		this.name= 'animal';
		this.sound= 'Grrrr';
		this.animalClick = function () {
			alert(this.name+' says '+this.sound);
		}
});

app1.controller('controllerTwo',function ($controller) {
	var childCrtl =this;
	childCrtl.child = $controller('controllerOne',{});
	childCrtl.child.name= 'Dog';
	childCrtl.child.bark= 'Woof';
	childCrtl.child.dogData= function () {
		alert(this.name+' says '+this.sound+' and '+this.bark);
	};
});
