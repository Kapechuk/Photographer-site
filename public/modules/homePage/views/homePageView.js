define([
		'backbone',
		'app',
		'text!modules/homePage/templates/homePageTemplate.html',
		'masonry',
		'imagesLoaded',
		'lazyload',
		'modules/homePage/collections/galleryPreviewImgCollection',
		'modules/homePage/views/galleryPreviewImgViews'
	],
	function(Backbone, App, homePageTemplate, Masonry, ImagesLoaded, Lazyload, GalleryPreviewImgCollection, GalleryPreviewImgViews) {
		App.HomePageView = Backbone.View.extend({
			initialize : function () {
				this.addEventListeners();
				this.galleryPreviewImgCollection = new GalleryPreviewImgCollection();
				this.galleryPreviewImgViews = new GalleryPreviewImgViews({
					collection : this.galleryPreviewImgCollection
				});
			},
			template: _.template(homePageTemplate),
			render: function () {
				this.$el.html(this.template(App.messages));
				this.previewImgGridRender();
				return this;
			},

			previewImgGridRender : function () {
				var that = this;
				this.trigger('loading:start');
				this.galleryPreviewImgViews.setElement('.masonry-container');
				this.galleryPreviewImgCollection.reset();
				this.galleryPreviewImgCollection.fetch().then(function() {
					that.trigger('loading:stop');
					that.msnrGridLayoutRender(Masonry);
				});
			},

			msnrGridLayoutRender : function () {
				var container = $('.masonry-container')[0];

				ImagesLoaded( container, function() {
					var msnry = new Masonry( container, {
						columnWidth: 315,
						itemSelector: '.photo'
					});
					$('.masonry-container').find('img').lazyload({
						effect : "fadeIn"
					});
				});
			},

			startLoading: function () {
				$('.spinner').show();
			},

			stopLoading: function () {
				$('.spinner').hide();
			},

			addEventListeners: function () {
				this.on('loading:start', this.startLoading, this);
				this.on('loading:stop', this.stopLoading, this);
			}
		});
		return App.HomePageView
	});