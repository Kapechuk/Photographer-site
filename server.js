var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var jade = require('jade');
var extensions = {
	'js'   : 'text/javascript',
	'css'  : 'text/css',
	'txt'  : 'text/plain',
	'xml'  : 'application/xml',
	'jpg'  : 'image/jpg',
	'jpeg' : 'image/jpeg',
	'json' : 'application/json',
	'gif'  : 'image/gif',
	'png'  : 'image/png',
	'svg'  : 'image/xml+svg'
};

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	var html = jade.renderFile('index.jade', {
		pageTitle: "Веб сайт Семак Тетяни",
		youAreUsingJade: true
	});
	response.send(html);
});

app.get('/db/galleries', function(request, response) {
	var filePath = app.getFilePath(request.url);
	var contentType = extensions[path.extname(filePath).substr(1)];
	var method = request.method;
	console.log('onHtmlRequestHandler... request.url: ' + request.url);

	console.log('onHtmlRequestHandler... getting: ' + filePath);
	if (method === 'POST'){
		app.saveItem(request, response);
	} else{
		app.getItems(request, response);
	}
});

app.get('/db/galleries/:item', function (request, response) {
	var filePath = app.getFilePath(request.url);
	var contentType = extensions[path.extname(filePath).substr(1)];
	var method = request.method;
	console.log('onHtmlRequestHandler... request.url: ' + request.url);

	console.log('onHtmlRequestHandler... getting: ' + filePath);
	if (!request.url.indexOf('/db/galleries/')) {
		switch (method) {
			case 'GET'    :
				app.getItem(request, response);
				break;
			case 'DELETE' :
				app.deleteItem(request, response);
				break;
			case 'POST'   :
			case 'PUT'    :
			case 'UPDATE' :
				app.saveItem(request, response);
				break;
		}
	}
});


app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});

app.getFilePath = function (url) {
	var filePath = url;
	if (url == '/') {
		filePath = 'index.html';
	} else {
		filePath = url.substr(1);
	}
	console.log("url: " + filePath);

	return filePath;
};

/**
 * Return Array of Items
 * @param req Request
 * @param res Response
 */
app.getItems = function (req, res) {
	var arr = [];
	var url = 'public' +  req.url;

	var files = fs.readdirSync(url);

	for (var i = 0; i < files.length; i++) {
		arr.push(JSON.parse(fs.readFileSync(url + '/' + files[i])));
	}
	res.writeHead(200, {
		'Content-Type' : 'application/json' || 'text/plain'
	});

	if (req.method === 'HEAD') {
		res.end();
	}
	else {
		res.write(JSON.stringify(arr), 'utf8');
		res.end();
	}
};










/**
 * Will delete item from file system
 * @param req Request
 * @param res Response
 */
app.deleteItem = function (req, res) {
	var url = __dirname + req.url + '.json';
	var me = this;

	url = url.replace('/', '\\');
	fs.exists(url, function (exists) {
		if (exists) {
			item = fs.readFileSync(url);
			fs.unlink(url, function (error){
				if (error) {
					me.sendError(url, res, error);
				} else {
					res.writeHead(200, {
						'Content-Type' : 'application/json'
					});
					res.write(JSON.stringify(JSON.parse(item)));
					res.end();
					console.log('File was successfully removed!')
				}
			});
		} else {
			me.sendMissing(url, res);
		}
	});
}

/**
 * Will save file to file system.
 * @param req Request
 * @param res Response
 */
app.saveItem = function (req, res) {
	var me = this;
	var reqBody = '';
	var url = req.url.substr(1) + '.json';
	var dirName = path.dirname(req.url.substr(1)) + '/';
	var fileName = path.basename(req.url.substr(1));
	var fileBody = '';

	if (dirName === './'){
		dirName = 'static/galleries/'
	}
	var len = fs.readdirSync(dirName).length;
	var id = len;

	if (req.method === 'POST') {
		if (fileName ==='.json' || fileName === 'undefined.json' || fileName === 'undefined' || fileName === ''|| fileName === 'static/galleries'){
			for (var i = 0; i < len; i++){
				if(!fs.existsSync(dirName + i + '.json')) {
					url = dirName + i + '.json';
					id = i;
					break;
				} else {
					url = dirName + len + '.json';
				}
			};
		}
	};

	if (len === 0){
		url = dirName + len + '.json';
	};

	req.on('data', function (chunk) {
		// Append the current chunk of data to the reqBody variable
		reqBody += chunk;
	});

	req.on('end', function () {
		res.writeHead(200, "OK", {
			'Content-Type' : 'application/json'
		});
		fileBody = JSON.stringify(me.addIdNumber(reqBody, id));
		res.write(fileBody);
		res.end();

		fs.writeFile(url, fileBody, function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log('The file has been saved at ' + url);
			}
		});
	});
}
/**
 * Return Item
 * @param req Request
 * @param res Response
 */
app.getItem = function (req, res) {
	var url = __dirname + '/public' + req.url + '.json';
	var me = this;
	var item;

	url = url.replace(/\\/g, '/');

	fs.exists(url, function (exists) {
		if (exists) {
			item = fs.readFileSync(url);
			res.writeHead(200, {
				'Content-Type' : 'application/json'
			});
			res.write(JSON.stringify(JSON.parse(item)));
			res.end();
		} else {
			me.sendMissing(url, res);
		}
	});
}
/**
 * Will add ID to item if not exist
 * @param {String} body. Item body
 * @param {Integer} id. Id to item
 * @return {Object} Item
 */
app.addIdNumber = function (body, id){
	var val = JSON.parse(body);

	if (val.id === undefined || val.id === null){
		val.id = id;
	}
	return val;
}
/**
 * Will send message about not implemented functionality.
 * @param req Request
 * @param res Response
 */
app.sendNotImplemented = function (req, res) {
	var reqBody = '<div>' + req.method + ' isn\'t implemented yet!</div>';
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.write(reqBody);
	res.end();
	console.log(req.method + ' isn\'t implemented yet!');
}
/**
 * Will send 404 not found message.
 * @param {String} url
 * @param res Response
 */
app.sendMissing = function (url, res) {
	res.writeHead(404, {
		'Content-Type' : 'text/html'
	});
	res.write('<!doctype html>\n');
	res.write('<title>404 Not Found</title>\n');
	res.write('<h1>Not Found</h1>');
	res.write('<p>The requested URL ' + escapeHtml(url) + ' was not found on this server.</p>');
	res.end();
	console.log('File not found!');
}
/**
 * Will send 500 error message.
 * @param {String} url
 * @param res Response
 * @param {String} error Error message
 */
app.sendError = function (url, res, error) {
	res.writeHead(500, {
		'Content-Type' : 'text/html'
	});
	res.write('<!doctype html>\n');
	res.write('<title>Internal Server Error</title>\n');
	res.write('<h1>Internal Server Error</h1>');
	res.write('<pre>' + escapeHtml(error) + '</pre>');
	res.end();
	console.log('Internal Server Error!')
};

function escapeHtml(value) {
	return value.toString().
		replace('<', '&lt;').
		replace('>', '&gt;').
		replace('"', '&quot;');
}