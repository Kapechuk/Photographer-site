define(['backbone'],
	function (Backbone) {
		var App = function() {
			this.vent = _.extend({}, Backbone.Events);
		};
		return new App()
});
