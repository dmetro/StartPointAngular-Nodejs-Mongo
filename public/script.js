
angular.module('myApp', ['ui.router'])
    //browserify  ./public/script.js -o ./public/appbundle.js 
    .config(require('./config/router.js'))
    .service('backend_service',require('./service/backend_service.js'))
    .controller('mainController', require('./controllers/mainController.js'))
    .controller('loginController', require('./controllers/loginController.js'))
    
