define(['backbone', 'app', 'text!templates/header.html'],
	function (Backbone, App, headerTemplate) {
		App.HeaderView = Backbone.View.extend({
			tagName: "header",
			template: _.template(headerTemplate),

			initialize : function () {
				this.render();
			},
			render: function() {
				this.$el.html(this.template(App.messages));
				return this;
			},
			insertElem : function () {
				(this.$el).prependTo('.wrapper');
				return this;
			}
		});
	return App.HeaderView;
});
