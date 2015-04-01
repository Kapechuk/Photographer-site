define([
		'backbone',
		'app'
	],
	function(Backbone, App) {
		App.GalleryPreviewImgModel = Backbone.Model.extend({
			initialize : function () {

			},

			urlRoot: "/db/galleries/",
			setUrl: function(id) {
				this.url = this.urlRoot + id;
			}
		});
		return App.GalleryPreviewImgModel
	});
