define([
		'backbone',
		'app'
	],
	function(Backbone, App) {
		App.GalleryView = Backbone.View.extend({
			tagName: 'div',
			className: 'gallery',

			events: {

			},

			initialize : function () {
				var that = this;
				this.model.fetch().success(function () {
					console.log(that.model.attributes)
				});
			},

			render: function () {

			},

			initElem: function () {
			}

		});
		return App.GalleryView
	});

