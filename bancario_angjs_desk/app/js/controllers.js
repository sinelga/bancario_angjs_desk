var app = angular.module('controllers', []);


app.controller('LoadCtrl', function ($scope,$http) {
	
	
	var url = "http://146.185.151.26/redis?redisid=it_IT:news:Home&callback=JSON_CALLBACK";
	
	$http.jsonp(url).success(function(data){
		
		 $scope.rss=data;
		

		
	});
	
	
	
	$scope.selectRss = function(rs) {
		
		console.log(rs.Title)
		
	}
	
	
});