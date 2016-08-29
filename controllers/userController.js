var express = require('express');
var router = express.Router();

//var models = require('../models');

router.post('/checkuser' , function (req, res) {
    //db.addItem(new UserModel(req.body));
   // console.log("requst start");
    var user = [{name:'Dima' , lastName :'1234'},{name:'Dima1' , lastName :'12343'}];
    console.log('req.body',req.body);
    if(req.body !=null)
    {

    }
    res.send(user);
    //console.log("Notes");
}); 

module.exports = router;