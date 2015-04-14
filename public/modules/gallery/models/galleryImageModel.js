define([
		'backbone',
		'app'
	],
	function(Backbone, App) {
		App.GalleryImageModel = Backbone.Model.extend({
			initialize : function () {

			},

			urlRoot: "",
			setUrl: function(id) {
				this.url = this.urlRoot + id;
			}
		});
		return App.GalleryImageModel
	});

