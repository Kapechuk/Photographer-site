define([
		'backbone',
		'app',
		'text!modules/wedService/templates/wedServiceTemplate.html'
	],
	function(Backbone, App, wedServiceTemplate) {
		App.WedServiceView = Backbone.View.extend({
			template: _.template(wedServiceTemplate),
			render: function () {
				this.$el.html(this.template(App.messages));
				return this;
			}
		});
		return App.WedServiceView
	});

