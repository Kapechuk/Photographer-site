define(['backbone', 'app', 'text!templates/header.html'],
	function (Backbone, App, headerTemplate) {
		App.HeaderView = Backbone.View.extend({
			tagName: "header",
			template: _.template(headerTemplate),
			events : {
				'click .home'          : 'goToPage',
				'click .contacts '     : 'goToPage',
				'click .wed_service'   : 'goToPage',
				'click .school_albums' : 'goToPage',
				'click .blank'         : 'goToPage'
			},

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
			},

			goToPage : function (e) {
				if(e.target.className !== "blank") {
					App.vent.trigger('change:route', e.target.className, { trigger: true });
					e.preventDefault();
					return false;
				} else {
					e.preventDefault();
					return false;
				}
			}

		});
	return App.HeaderView;
});
