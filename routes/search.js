var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bluebird = require('bluebird');
var urlencode = require('urlencode');
var db = mysql.createConnection({
	host:'localhost',
	user:'dba',
	password:'abcd1234',
	database:'project'
});
db.connect();
router.get('/',function(req, res, next){
  var table = req.query.list;
  var search = req.query.search; 
  db.query('SELECT * FROM '+table+' WHERE address REGEXP \''+search+'\';',function(err, result, fields){
  	if(err){
		console.log(err);
	}
  	else{
//		console.log(result);

		res.render('search',{results :result, table : table});	
		

	
	}
  });

});


function escapeRegex(text) {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
	}

module.exports = router;
