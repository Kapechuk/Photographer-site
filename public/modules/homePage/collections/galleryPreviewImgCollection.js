define([
		'backbone',
		'app',
		'modules/homePage/models/galleryPreviewImgModel'
	],
	function (Backbone, App, GalleryPreviewImgModel) {
		App.GalleryPreviewImgCollection = Backbone.Collection.extend({
			model: GalleryPreviewImgModel,
			url: '/db/galleries'
		});

		return App.GalleryPreviewImgCollection;
});
