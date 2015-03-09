require.config({
	baseUrl: './',
	paths : {
		'text'         : 'libs/text',
		'jquery'       : 'libs/jquery-2.1.1.min',
		'underscore'   : 'libs/underscore-min',
		'backbone'     : 'libs/backbone-min',
		'bootstrap'    : 'libs/bootstrap.min',
		'masonry'      : 'libs/masonry.pkgd.min',
		'imagesLoaded' : 'libs/imagesloaded.pkgd.min',
		'lazyload'     : 'libs/jquery.lazyload.min',
		'app'          : 'app'
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
		},
		'lazyload' : {
			deps: ['jquery']
		}
	}
});

require(['exApp'],
	function (exApp) {
		exApp.start();
	});
