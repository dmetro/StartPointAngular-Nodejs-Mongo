module.exports = function Login($scope , $http , backend_service)
{
    //   $scope.isLoading = true;
      console.log('init login controller') ; 
      $scope.User = {};
      $scope.Login = function()
      {
          var user =  backend_service.Login($scope.User);
          console.log("Login",$scope.User);
          console.log("User",user);

      }
};
