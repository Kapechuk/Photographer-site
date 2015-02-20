define(['backbone', 'app', 'views/headerView', 'views/footerView'],
	function (Backbone, App, HeaderView, FooterView) {
		App.mainAppController = function () {
			var self = this;
			var init = function () {
				self.headerView = new HeaderView({el: $('header')});
				self.footerView = new FooterView({el: $('footer')});
				self.headerView.render();
				self.footerView.render();
			};

			init();
		};
		return App.mainAppController;
});
