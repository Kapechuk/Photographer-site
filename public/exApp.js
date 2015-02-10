define(['backbone', 'app', 'router/appRouter', 'controllers/mainAppController'],
	function (Backbone, App, AppRouter, MainAppController) {

		 App = _.extend(App, {

			start : function () {
				this.router = new AppRouter();
				this.mainController = new MainAppController();

				if(Backbone.history) {
					Backbone.history.start();
				}
			}


		});

		return App;
});
