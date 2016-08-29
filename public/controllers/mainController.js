module.exports = function mainController($scope , $http)
{
       $scope.isLoading = true;
        $scope.users = [];

       
      //  console.log("dima tester");
/*        $http({
            method: 'GET',
            url: '/notes'
        }).then(function (response) {
            console.log('response', response);
            $scope.users = response.data;

            $scope.isLoading = false;

        }, function (err) {
            console.log(err);
        });
        */
};