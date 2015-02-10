require.config({
	baseUrl: './',
	paths: {
		'text': 'libs/text',
		'jquery': 'libs/jquery-2.1.1.min',
		'underscore': 'libs/underscore-min',
		'backbone': 'libs/backbone-min',
		'bootstrap': 'libs/bootstrap.min',
		'app': 'app'
	},
	shim: {
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore': {
			exports: '_'
		},
		'bootstrap':{
			deps: ['jquery']
		},
		'jquery' : {
			exports: '$'
		}
	}
});

require(['exApp'],
	function (exApp) {
		exApp.start();
	});
