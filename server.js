var express = require('express');
var app = express();
var jade = require('jade');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	var html = jade.renderFile('index.jade', {pageTitle: "TITLE", youAreUsingJade: true});
	response.send(html);
});

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});