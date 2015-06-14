define([
   'backbone',
	'app',
	'modules/gallery/views/galleryView',
	'modules/gallery/models/galleryModel'
	],
	function(Backbone, App, GalleryView, GalleryModel) {
		App.GalleryPageView = Backbone.View.extend({
			initialize: function () {
				var that = this;
				that.galleryModel = new GalleryModel({galleryNum : that.options.galleryNum});
				that.galleryView = new GalleryView({model : that.galleryModel});
			},
			template: '',
			render: function() {

			}
		});
        return App.GalleryPageView
});
