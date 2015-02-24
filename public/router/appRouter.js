define(['backbone', 'app'],
	function (Backbone, App) {
		App.Router = Backbone.Router.extend({
			initialize: function() {

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
			},

			showSchoolAlbumsPage : function () {
				console.log("School Albums Page!");
			},

			showContactsPage : function () {
				console.log("Contacts Page!");
				App.mainController.showContactsPage();
				this.navigate('contacts')
			}
		});

		return App.Router;
});
