var http = require('http');
var fs = require('fs');



var express = require('express');
var app = express();


app.get('/', function(request, response) {
    response.sendFile(__dirname + '/page1.html')
});


app.get('/weather3.js', function(request, response) {
    response.sendFile(__dirname + '/weather3.js')
});

app.post('/page2.html', function(request, response) {
    response.sendFile(__dirname + '/page2.html')
});
app.post('/result.html', function(request, response) {
    response.sendFile(__dirname + '/result.html')
});
app.post('/page3.html', function(request, response) {
    response.sendFile(__dirname + '/page3.html')
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


app.get('/checklist.js', function(request, response) {
    response.sendFile(__dirname + '/checklist.js')
});





//삭제
app.get('/result.html', function(request, response) {
    response.sendFile(__dirname + '/result.html')
});




app.listen(3000, () => console.log('Port is 3000'));