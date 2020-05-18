var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bluebird = require('bluebird');
var db = mysql.createConnection({
	host:'localhost',
	user:'dba',
	password:'abcd1234',
	database:'project'
});
db.connect();
router.get('/',function(req, res, next){
  db.query("SELECT * FROM publicParkingLot;",function(err, result, fields){
  	if(err){
		console.log(err);
	}
  	else{
		//console.log(result);
		res.render('publicparkinglot',{results :result});
	
	
	}
  });

});

module.exports = router;
