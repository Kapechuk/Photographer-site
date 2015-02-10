define(['backbone', 'app'],
	function (Backbone, App) {
		App.Router = Backbone.Router.extend({
			initialize: function() {

			},
			routes: {
				'' : 'showMainPage',
				'help' : 'help'
			},
			
			showMainPage : function () {
				console.log("Home!");
				this.navigate('home', {replace: true})
			},

			help : function () {
				console.log("Help!")
			}
		});

		return App.Router;
});
