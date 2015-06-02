define([
		'backbone',
		'app',
		'modules/gallery/models/galleryImageModel'
	],
	function (Backbone, App, GalleryImageModel) {
		App.GalleryImagesCollection = Backbone.Collection.extend({
			model: GalleryImageModel,
			setUrl : function () {
				this.url = 'static/galleries/gallery_' + this.galleryNum + '/preview'
			}
		});

		return App.GalleryImagesCollection;
	});
