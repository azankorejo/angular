var app = angular.module('app1',[]);


app.controller('mainController',function($scope,$http){

	$scope.getData = function(){
		$http.get("angular.json").then(
			function(data){
				$scope.players = data;
			}
		);
	};


	$scope.translate = function() {
	    var words = $scope.wordsToTranslate.replace(/ /g,"+");
	 
	    var jsonUrl = "http://newjustin.com/translateit.php?action=translations&english_words=" + words;
	 
	    $http.get(jsonUrl).then(
	      function(data){
	        $scope.translated = data;
	      }
	    );
	 
	  }

});
