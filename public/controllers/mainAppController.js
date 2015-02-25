define([
		'backbone',
		'app',
		'views/headerView',
		'views/footerView',
		'modules/contacts/views/contactsView',
		'modules/schoolAlbums/views/schoolAlbumsView',
		'../modules/wedService/views/wedServiceView'
	],
	function (
		Backbone,
		App,
		HeaderView,
		FooterView,
		ContactsView,
		SchoolAlbumsView,
		WedServiceView) {

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
				self.schoolAlbumsView = new SchoolAlbumsView();
				self.wedServiceView = new WedServiceView();
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
				self.selectors.mainContent.html('');
			};

			self.showContactsPage = function () {
				self.layoutRender();
				self.contactsView.setElement(self.selectors.mainContent);
				self.contactsView.render();
			};

			self.showSchoolAlbumsPage = function () {
				self.layoutRender();
				self.schoolAlbumsView.setElement(self.selectors.mainContent);
				self.schoolAlbumsView.render();
			};

			self.showWedServicePage = function () {
				self.layoutRender();
				self.wedServiceView.setElement(self.selectors.mainContent);
				self.wedServiceView.render()
			};

			init();
		};
		return App.mainAppController;
});
