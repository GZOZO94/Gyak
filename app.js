/*var http=require('http');

var server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("Hello node server!");
});

server.listen(4242);*/
var express=require('express'),
	app=express();
	
app.get("/", function(request,response){
	response.sendfile("index.html");
});

app.get("/login", function(request,response){
	response.sendfile("login.html");
});

app.get("/:user/send", function(request,response){
	response.send("send"+request.params.user + "     "+ request.query.query);
});

app.listen(3000);
console.log('Server is running');