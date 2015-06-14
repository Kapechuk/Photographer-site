define([
		'backbone',
		'app',
		'views/headerView',
		'views/footerView',
		'modules/contacts/views/contactsView',
		'modules/schoolAlbums/views/schoolAlbumsView',
		'modules/wedService/views/wedServiceView',
		'modules/homePage/views/homePageView',
		'modules/gallery/views/galleryPageView'
	],
	function (
		Backbone,
		App,
		HeaderView,
		FooterView,
		ContactsView,
		SchoolAlbumsView,
		WedServiceView,
		HomePageView,
		GalleryPageView) {

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
				self.homePageView = new HomePageView();
			};

			self.layoutRender = function() {
				if(!self.layoutRenderedFlag){
					self.headerView.insertElem();
					self.headerView.delegateEvents();
					self.footerView.insertElem();
					self.footerView.delegateEvents();
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

			self.toggleMainContainerClassName = function(pageClassName) {
				var newClassName = App.messages.mainContentContainerClassName + ' ' + pageClassName;
				self.selectors.mainContent.removeClass().addClass(newClassName);
			};

			self.showMainPage = function () {
				self.layoutRender();
				self.toggleMainContainerClassName(App.messages.home_page.pageContentContainerClassName);
				self.homePageView.setElement(self.selectors.mainContent);
				self.homePageView.render();
			};

			self.showContactsPage = function () {
				self.layoutRender();
				self.toggleMainContainerClassName(App.messages.contacts.pageContentContainerClassName);
				self.contactsView.setElement(self.selectors.mainContent);
				self.contactsView.render();
			};

			self.showSchoolAlbumsPage = function () {
				self.layoutRender();
				self.toggleMainContainerClassName(App.messages.school_albums.pageContentContainerClassName);
				self.schoolAlbumsView.setElement(self.selectors.mainContent);
				self.schoolAlbumsView.render();
			};

			self.showWedServicePage = function () {
				self.layoutRender();
				self.toggleMainContainerClassName(App.messages.wed_service.pageContentContainerClassName);
				self.wedServiceView.setElement(self.selectors.mainContent);
				self.wedServiceView.render()
			};

			self.showGallery = function (galleryNumber) {
				self.layoutRender();
				self.selectors.mainContent.empty();
				self.toggleMainContainerClassName(App.messages.gallery.pageContentContainerClassName);
				self.galleryPageView = new GalleryPageView({
					galleryNum : galleryNumber
				});
				self.galleryPageView.setElement(self.selectors.mainContent);
				self.galleryPageView.render();
			};

			init();
		};
		return App.mainAppController;
});
