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

//set port for listening
var midPort = app.listen(port, function () {
    console.log("Server is listening on port " + port);
});


//use socker io
var socketServer = require('socket.io');
var io = socketServer(midPort);

//setup socket connection
io.sockets.on('connection', function(socket) {
    socket.emit('message', {message: 'Welcome to the webchat !'});
    socket.on('send', function(data) {
        io.sockets.emit('message', data);
    });
});