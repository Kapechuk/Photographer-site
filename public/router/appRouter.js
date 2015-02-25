define(['backbone', 'app'],
	function (Backbone, App) {
		App.Router = Backbone.Router.extend({
			initialize: function() {
				this.addHandlers();
			},
			routes : {
				''              : 'showMainPage',
				'home'          : 'showMainPage',
				'wed_service'   : 'showWedServicePage',
				'school_albums' : 'showSchoolAlbumsPage',
				'contacts'      : 'showContactsPage'
			},
			
			showMainPage : function () {
				console.log("Home Page!");
				App.mainController.showMainPage();
				this.navigate('home', {replace: true})
			},

			showWedServicePage : function () {
				console.log("Wed Service Page!");
				App.mainController.showWedServicePage();
				this.navigate('wed_service');
			},

			showSchoolAlbumsPage : function () {
				console.log("School Albums Page!");
				App.mainController.showSchoolAlbumsPage();
				this.navigate('school_albums');
			},

			showContactsPage : function () {
				console.log("Contacts Page!");
				App.mainController.showContactsPage();
				this.navigate('contacts')
			},


			navigateTo : function (route, options) {
				options = options || {};

				this.navigate(route, options);
			},

			addHandlers : function () {
				App.vent.on('change:route', this.navigateTo.bind(this));
			}
		});

		return App.Router;
});
