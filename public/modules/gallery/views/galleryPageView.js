define([
   'backbone',
	'app',
	'modules/gallery/views/galleryImagesView',
	'modules/gallery/collections/galleryImagesCollections'
	],
	function(Backbone, App, GalleryImagesView, GalleryImagesCollection) {
		App.GalleryPageView = Backbone.View.extend({
			initialize: function () {
				var that = this;
				that.galleryImagesCollection = new GalleryImagesCollection();
				that.galleryImagesCollection.galleryNum = that.options.galleryNum;
				that.galleryImagesView = new GalleryImagesView({
					collection : that.galleryImagesCollection
				});
			},
			template: '',
			render: function() {

			}
		});
        return App.GalleryPageView
});
