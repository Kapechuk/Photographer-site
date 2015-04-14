define([
		'backbone',
		'app',
		'modules/gallery/models/galleryImageModel'
	],
	function (Backbone, App, GalleryImageModel) {
		App.GalleryImagesCollection = Backbone.Collection.extend({
			model: GalleryImageModel,
			url: ''
		});

		return App.GalleryImagesCollection;
	});
