
 angular.module("mainController",[]).controller('mainController', ['$scope','$location','userFactory',function($scope,$http,userFactory) {
  $scope.current_user=[];
  $scope.isShow = true;
  $scope.tabName = "tab1";
  $scope.IsHidden=false;
  $scope.IsHidden2=false;
  $scope.IsHidden3=false;
  $scope.IsHidden4=false;
     $scope.ShowHide=function() {

  	$scope.IsHidden=$scope.IsHidden ? false : true;
  }

    $scope.ShowHide2=function() {
  	$scope.IsHidden2=$scope.IsHidden2 ? false : true;
  }
    $scope.ShowHide3=function() {

  	$scope.IsHidden3=$scope.IsHidden3 ? false : true;
  }
    $scope.ShowHide4=function() {

  	$scope.IsHidden4=$scope.IsHidden4 ? false : true;

};

// userFactory.get_user(function(info){
//     $scope.current_user = info[0].name;
//     console.log(info[0].name);
//   }); 

}]);