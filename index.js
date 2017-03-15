var express = require('express');
var app = express();

var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');
 
 app.get('/', function(req, res){
    res.sendfile('index.html');
});

client.on('connect', function () {
  client.subscribe('hello')
  /*client.publish('hello', 'Helloka')*/
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString())
});