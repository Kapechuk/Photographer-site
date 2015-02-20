define(['backbone', 'app', 'text!templates/footer.html'],
	function (Backbone, App, footerTemplate) {
		App.FooterView = Backbone.View.extend({
			template: _.template(footerTemplate),
			render: function () {
				this.$el.html(this.template(App.messages));
			}

		});

		return App.FooterView;
	});

