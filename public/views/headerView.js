define(['backbone', 'app', 'text!templates/header.html'],
	function (Backbone, App, headerTemplate) {
		App.HeaderView = Backbone.View.extend({
			template: _.template(headerTemplate),
			render: function() {
				this.$el.html(this.template(App.messages));
				return this;
			}
		});
	return App.HeaderView;
});
