var express = require("express");
var app = express();
var port = 3000;

console.log("Welcome to the Chat App !");

//set routes
app.set('views', __dirname + '/views');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get('/', (req, res) => {
    res.render("page");
});

//use static files
app.use(express.static(__dirname + '/public'));