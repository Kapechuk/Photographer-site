define([
		'backbone',
		'app',
		'modules/homePage/views/galleryPreviewImgView'
	],
	function(Backbone, App, GalleryPreviewImgView) {
		App.GalleryPreviewImgViews = Backbone.View.extend({
			el: '.masonry-container',
			initialize : function () {

			},
			render: function () {
				this.$el.empty();
				this.collection.each(function (img, index) {
					debugger;
					var galleryPreviewImgView = new GalleryPreviewImgView({model: img});
					this.$el.append(galleryPreviewImgView.render().el);
				}, this);

				return this;
			}

		});
		return App.GalleryPreviewImgViews
	});