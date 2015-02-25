define([
		'backbone',
		'app',
		'text!modules/schoolAlbums/templates/schoolAlbums.html'
	],
	function(Backbone, App, schoolAlbumsTemplate) {
		App.SchoolAlbumsView = Backbone.View.extend({
			template: _.template(schoolAlbumsTemplate),
			render: function () {
				this.$el.html(this.template(App.messages));
				return this;
			}
		});
		return App.SchoolAlbumsView
	});

