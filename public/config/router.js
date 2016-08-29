module.exports = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
     .state('login', {
         url: '/login',
         templateUrl: '/views/login.html',
         controller: require('../controllers/loginController.js')
     })
     
};