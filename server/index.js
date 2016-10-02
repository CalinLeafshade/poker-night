var path = require('path');
var express = require('express');
var app = express();

// TODO get actual debug value;
var debug = true;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/public')));

if (debug) {
	// expose source maps for debugging
	app.use('/src', express.static(path.join(__dirname, '/src')));
	// disable view caching
	app.set('view cache', false);

}

app.get('/', function (req, res) {
    res.file('public/index.htm');
});

app.use(function(req,res,next) {
	var err = new Error();
	err.code = 404;
	err.message = "Page not found";
	next(err);
});

//error handler
app.use(function(err, req, res, next) {

	var code = err.code || 500;
	var message = err.message || "There was an error";

	res.render('error', { code: code, message: message });

});

app.listen(1337, function () {
	console.log('Example app listening on port 1337!');
});
