define([
		'backbone',
		'app'
	],
	function(Backbone, App) {
		App.GalleryImageModel = Backbone.Model.extend({
			initialize : function () {

			},

			urlRoot: 'static/galleries/gallery_' + this.galleryNum + '/preview',
			setUrl: function(id) {
				this.url = this.urlRoot + id;
			}
		});
		return App.GalleryImageModel
	});

