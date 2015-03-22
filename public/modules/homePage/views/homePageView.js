define([
		'backbone',
		'app',
		'text!modules/homePage/templates/homePageTemplate.html',
		'masonry',
		'imagesLoaded',
		'lazyload'
	],
	function(Backbone, App, homePageTemplate, Masonry, ImagesLoaded, Lazyload) {
		App.HomePageView = Backbone.View.extend({
			initialize : function () {

			},
			template: _.template(homePageTemplate),
			render: function () {
				this.$el.html(this.template(App.messages));
				this.previewImgGridRender();
				this.msnrGridLayoutRender(Masonry);
				return this;
			},

			previewImgGridRender : function () {

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
			}
		});
		return App.HomePageView
	});