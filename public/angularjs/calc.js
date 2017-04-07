var calc=angular.module('calc',[]);

calc.controller('myController',function($scope,$http)
		{
	$scope.hasResult = true;
	
	//$scope.itinerary=[];
	$scope.submit = function() {
		$http({
			method : "POST",
			url : '/calculate',
			data : {
				"username" : $scope.ddfrom,
				"password" : $scope.ddto
			}
		
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode == 200) {
				$scope.invalid_login = false;
				$scope.validlogin = true;
				
			}
			else
				{
				$scope.validlogin = false;
				$scope.invalid_login = true;
				$scope.itinerary.push({ 'name':$scope.ddfrom, 'employees': $scope.ddto });
				$scope.ddfrom='';
				$scope.ddto='';
				
				}
				//Making a get call to the '/redirectToHomepage' API
				//window.location.assign("/homepage"); 
		}).error(function(error) {
			$scope.validlogin = true;
			$scope.invalid_login = true;
		});
	};
	
	
		});