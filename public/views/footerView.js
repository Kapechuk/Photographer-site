define(['backbone', 'app', 'text!templates/footer.html'],
	function (Backbone, App, footerTemplate) {
		App.FooterView = Backbone.View.extend({
			tagName: "footer",
			template: _.template(footerTemplate),

			initialize : function () {
				this.render();
			},
			render: function () {
				this.$el.html(this.template(App.messages));
				return this;
			},
			insertElem : function () {
				(this.$el).insertAfter('.wrapper');
				return this;
			}
		});

		return App.FooterView;
	});

