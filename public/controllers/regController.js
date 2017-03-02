angular.module("regController",[]).controller('regController', ['$scope','$http','$rootScope',function($scope,$http,$rootScope) {

 $scope.register = function () {
            $scope.registered = true;
            $http.post('/register',$scope.reg).then(function(response) {
    console.log("I got the data I requested");
    console.log($scope.reg);
    $rootScope.registerlist = response.data;
    console.log( $rootScope.registerlist);
    $scope.registerlist = "";
  });
        }
}]);

 
