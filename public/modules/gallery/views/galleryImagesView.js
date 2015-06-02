define([
		'backbone',
		'app',
		'modules/gallery/views/galleryImageView'
	],
	function(Backbone, App, GalleryImageView) {
		App.GalleryImagesView = Backbone.View.extend({
			tagName: "div",
			initialize: function () {
				var that = this;
				this.collection.setUrl();
				this.collection.on('sync', function () {
					that.render();
				})
			},
			render: function() {
				this.$el.empty();
				this.collection.each(function (img, index) {
					var galleryImageView = new GalleryImageView({model: img});
					this.$el.append(galleryImageView.render().el);
				}, this);
			}
		});
		return App.GalleryImagesView
	});

