define(['backbone', 'app', 'views/headerView', 'views/footerView'],
	function (Backbone, App, HeaderView, FooterView) {
		App.mainAppController = function () {
			var self = this;
			var init = function () {
				self.headerView = new HeaderView({el: $('header')});
				self.footerView = new FooterView({el: $('footer')});
				console.log(App.messages);
				self.headerView.render();
			};

			init();
		};
		return App.mainAppController;
});
