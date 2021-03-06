/*eslint-disable no-console*/
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('aa-welcome');
});

app.get('/auth/google', function(req, res) {
    res.render('aa-auth-google');
});

app.get('/auth/google/callback', function(req, res) {
    res.render('aa-logged');
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening on http://' + host + ':' + port);
});
app.use(function (req, res, next) {
    res.status(404).send('Sorry, cannot find requested site');
});
