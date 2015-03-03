define([
		'backbone',
		'app',
		'text!modules/homePage/templates/homePageTemplate.html',
		'masonry'
	],
	function(Backbone, App, homePageTemplate, Masonry) {
		App.HomePageView = Backbone.View.extend({
			initialize : function () {

			},
			template: _.template(homePageTemplate),
			render: function () {
				this.$el.html(this.template(App.messages));
				this.msnrGridLayoutRender(Masonry);
				return this;
			},

			msnrGridLayoutRender : function () {
				var msnry = new Masonry( '.masonry-container', {
					columnWidth: 200,
					itemSelector: '.item'
				});
				console.log(msnry);
			}
		});
		return App.HomePageView
	});