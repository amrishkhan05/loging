var express=require("express"),
	app=express(),
	mongojs=require("mongojs"),
	db=mongojs("registerlist",["registerlist","contactlist"]),
	bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get("/register",function(request,response) {
	


	db.registerlist.find(function(err,data) {
		console.log(data);
		response.json(data);
	});
// });
// app.post("/cilayout" , function(req , res) {
// 	console.log(req.body);
// 	db.registerlist.insert(req.body, function(err , data) {
// 		res.json(data);
// 	})
// })
app.post("/register" , function(req , res) {
	console.log(req.body);
	db.registerlist.insert(req.body, function(err , data) {
		console.log(data);
		res.json(data);
	})
});
app.get('/Contacts', function(req, res) {
    console.log("I received a get Request");
    db.contactlist.find(function(err, docs) {
        res.json(docs);
    });

});

app.post('/', function(req, res) {
    console.log(req.body);
    console.log("data is posted")
    db.contactlist.insert(req.body, function(err, docs) {
        res.json(docs);
    });
});
app.listen(3000,function() {
	console.log("Server running on port 3000");
});