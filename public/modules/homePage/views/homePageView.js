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

				return this;
			}
		});
		return App.HomePageView
	});