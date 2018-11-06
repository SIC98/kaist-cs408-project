var http = require('http');
var fs = require('fs');

var express = require('express');
var app = express();
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/howdy.html')
});
app.post('/input.html', function(request, response) {
    response.sendFile(__dirname + '/input.html')
});
app.post('/result.html', function(request, response) {
    response.sendFile(__dirname + '/result.html')
});
app.post('/checkbox.html', function(request, response) {
    response.sendFile(__dirname + '/checkbox.html')
});
app.post('/manage_playlist.js', function(request, response) {
    response.sendFile(__dirname + '/manage_playlist.js')
});
app.get('/smile.png', function(request, response) {
    response.sendFile(__dirname + '/smile.png')
});
app.get('/sad.png', function(request, response) {
    response.sendFile(__dirname + '/sad.png')
});
app.get('/squint.png', function(request, response) {
    response.sendFile(__dirname + '/squint.png')
});

app.listen(3000, () => console.log('Port is 3000'));
