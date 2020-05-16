var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bluebird = require('bluebird');
var url = require('url');
var db = mysql.createConnection({
	host:'localhost',
	user:'dba',
	password:'abcd1234',
	database:'project'
});
db.connect();

router.get('/', async (req,res,next) => {
	var sess;
	sess=req.session;
	var title = req.query.title;
	var ID = req.query.id;
	var urlParsedObj = url.parse(req.url);
//	console.log(urlParsedObj.path)
	sess.path =urlParsedObj.path 

	const [review,post] = await Promise.all([
		bluebird.fromCallback(cb => db.query("SELECT * FROM review WHERE review.postID = "+ID+";",cb)),
		bluebird.fromCallback(cb => db.query("SELECT * FROM "+title+" WHERE ID = "+ID+";",cb))
	]);
	if(post && post.length){
//		console.log(post)
	return res.render('post', {reviews:review, posts:post,id:ID});
	}
});

module.exports = router;
