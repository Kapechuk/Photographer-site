define(['backbone', 'router/appRouter'],
	function (Backbone, AppRouter) {

		var App = function() {
			this.vent = _.extend({}, Backbone.Events);

			this.start = function () {
				this.router = new AppRouter();
				if(Backbone.history) {
					Backbone.history.start();
				}
			};

			return this;
		};

		return new App();
});
