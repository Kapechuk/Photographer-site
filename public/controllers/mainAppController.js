define([
		'backbone',
		'app',
		'views/headerView',
		'views/footerView',
		'modules/contacts/views/contactsView'
	],
	function (Backbone, App, HeaderView, FooterView, ContactsView) {
		App.mainAppController = function () {
			var self = this;
			var init = function () {
				self.headerView = new HeaderView({el: $('header')});
				self.footerView = new FooterView({el: $('footer')});
				self.contactsView = new ContactsView();
				self.headerView.render();
				self.footerView.render();
			};

			self.showContactsPage = function () {
				self.contactsView.setElement($('.main-content'));
				self.contactsView.render();
			};

			init();
		};
		return App.mainAppController;
});
