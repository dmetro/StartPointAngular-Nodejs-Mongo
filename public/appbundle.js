(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
     .state('login', {
         url: '/login',
         templateUrl: '/views/login.html',
         controller: require('../controllers/loginController.js')
     })
     
};
},{"../controllers/loginController.js":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){

angular.module('myApp', ['ui.router'])
    //browserify  ./public/script.js -o ./public/appbundle.js 
    .config(require('./config/router.js'))
    .service('backend_service',require('./service/backend_service.js'))
    .controller('mainController', require('./controllers/mainController.js'))
    .controller('loginController', require('./controllers/loginController.js'))
    

},{"./config/router.js":1,"./controllers/loginController.js":2,"./controllers/mainController.js":3,"./service/backend_service.js":5}],5:[function(require,module,exports){
module.exports = function backend_service($http) {
    
        this.Login = function (data) {
         console.log('api',data);
         return $http.post('/user/checkuser', data)
            .then(function (response) {
                   console.log('response',response);
                return response
               
            },
        function (err) {
            err['text'] = 'Something happens when obtaining dictionary file for languages!';
            $state.go('error', { 'error_obj': err });
        })
    }
    
}


},{}]},{},[4]);
