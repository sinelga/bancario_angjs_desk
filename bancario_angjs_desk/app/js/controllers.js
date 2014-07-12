var app = angular.module('controllers', []);


app.controller('LoadCtrl', function ($scope,$http) {
	
	$scope.clickOnRss= false;
	
	
	
	var url = "http://146.185.151.26/redis?redisid=it_IT:news:Home&callback=JSON_CALLBACK";
	
	$http.jsonp(url).success(function(data){
		
		 $scope.rss=data;
//		 $scope.selectedRss =data[data.length -1];
		

		
	});
	
		
	$scope.selectRss = function(rs) {
		
		
		$scope.clickOnRss= true;
		$scope.selectedItem = rs;
				
		
	}
	
	$scope.closeItem = function() {
		
		$scope.clickOnRss= false;
		
	}
	
	
});