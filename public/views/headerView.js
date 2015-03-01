define(['backbone', 'app', 'text!templates/header.html'],
	function (Backbone, App, headerTemplate) {
		App.HeaderView = Backbone.View.extend({
			tagName  : "header",
			className : "row",
			subMenu  : $('.sub-menu'),
			template : _.template(headerTemplate),
			events   : {
				'click .home'            : 'goToPage',
				'click .contacts '       : 'goToPage',
				'click .wed_service'     : 'goToPage',
				'click .school_albums'   : 'goToPage',
				'click .submenu-trigger' : 'showSubMenu'
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
					if(e.target.className === "home" || e.target.className === "contacts") {
						$('.sub-menu').slideUp(300, "swing");
						App.vent.trigger('change:route', e.target.className, { trigger: true });
					} else {
						App.vent.trigger('change:route', e.target.className, { trigger: true });
					}
				}
			},

			showSubMenu : function () {
				$('.sub-menu').slideToggle(300, "swing");
			}

		});
	return App.HeaderView;
});
