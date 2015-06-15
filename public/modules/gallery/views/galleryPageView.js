define([
    'backbone',
	'app',
	'modules/gallery/views/galleryView',
	'modules/gallery/models/galleryModel',
	'text!modules/gallery/templates/galleryPageTemplate.html'
	],
	function(Backbone, App, GalleryView, GalleryModel, galleryPageTemplate) {
		App.GalleryPageView = Backbone.View.extend({
			initialize: function () {
				var that = this;
				that.galleryModel = new GalleryModel({galleryNum : that.options.galleryNum});
				that.galleryView = new GalleryView({
					model : that.galleryModel,
					parent : that
				});
			},
			template: _.template(galleryPageTemplate),
			render: function() {
				this.$el.html(this.template());
				this.galleryView.fetchData();
			}
		});
        return App.GalleryPageView
});
