define([
   'backbone',
	'app',
	'modules/gallery/views/galleryImagesView',
	'modules/gallery/collections/galleryImagesCollections'
	],
	function(Backbone, App, GalleryImagesView, GalleryImagesCollection) {
		App.GalleryPageView = Backbone.View.extend({
			initialize: function () {
				this.galleryImagesCollection = new GalleryImagesCollection({
					galleryNum : this.galleryNum
				});
				this.galleryImagesView = new GalleryImagesView({
					collection : this.galleryImagesCollection
				});
			},
			template: '',
			render: function() {

			}
		});
        return App.GalleryPageView
});
