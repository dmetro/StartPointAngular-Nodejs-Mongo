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

