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
router.get('/', function(req,res,next){
	console.log(req.session.path)
	var title = req.query.title;
	var ID = req.query.id;
	var rating = req.query.rating;
	var content = req.query.content;
	db.query('INSERT INTO review values(null,\''+title+'\',\''+content+'\','+rating+','+ID+');',function(err, result,fields){
		if(err){
			console.log(err)
		}
		else{
//			console.log(result);
			res.redirect('/post'+req.session.path);
		}
	});


});

module.exports = router;
