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
			self.layoutRenderedFlag = false;
			self.selectors = {
				mainContent : $('.main-content')
			};

			var init = function () {
				self.headerView = new HeaderView();
				self.footerView = new FooterView();
				self.contactsView = new ContactsView();
			};

			self.layoutRender = function() {
				if(!self.layoutRenderedFlag){
					self.headerView.insertElem();
					self.footerView.insertElem();
					self.layoutRenderedFlag = true;
				}
			};

			self.layoutRemove = function() {
				if(self.layoutRenderedFlag) {
					self.headerView.remove();
					self.headerView.unbind();
					self.footerView.remove();
					self.footerView.unbind();
					self.layoutRenderedFlag = false;
				}
			};

			self.showMainPage = function () {
				self.layoutRender();
				self.selectors.mainContent.html('Main Page!');
			};

			self.showContactsPage = function () {
				self.layoutRender();
				self.contactsView.setElement(self.selectors.mainContent);
				self.contactsView.render();
			};

			init();
		};
		return App.mainAppController;
});
