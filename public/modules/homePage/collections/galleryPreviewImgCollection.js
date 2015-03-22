define([
		'backbone',
		'app',
		'modules/homePage/models/galleryPreviewImgModel'
	],
	function (Backbone, App, GalleryPreviewImgModel) {
		App.GalleryPreviewImgCollection = Backbone.Collection.extend({
			model: GalleryPreviewImgModel,
			url: '/static/galleries'
		});

		return App.GalleryPreviewImgCollection;
});
