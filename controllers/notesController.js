var express = require('express');
var router = express.Router();

//var models = require('../models');

router.get('/' , function (req, res) {
    //db.addItem(new UserModel(req.body));
   // console.log("requst start");
    var user = [{name:'Dima' , lastName :'1234'},{name:'Dima1' , lastName :'12343'}];
    res.send(user);
    //console.log("Notes");
}); 
router.get('/user', function (req, res) {
    //db.addItem(new UserModel(req.body));
   // console.log("requst start");
    var user = [{name:'Dima' , lastName :'1234'}];
    res.send(user);
    //console.log("Notes");
}); 
module.exports = router;