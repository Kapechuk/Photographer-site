define(['backbone', 'app', 'router/appRouter', 'controllers/mainAppController', 'messages'],
	function (Backbone, App, AppRouter, MainAppController, Messages) {

		 App = _.extend(App, {

			start : function () {
				this.messages = Messages;
				this.router = new AppRouter();
				this.mainController = new MainAppController();

				if(Backbone.history) {
					Backbone.history.start();
				}
			}


		});

		return App;
});
