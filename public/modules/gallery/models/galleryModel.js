define([
		'backbone',
		'app'
	],
	function(Backbone, App) {
		App.GalleryModel = Backbone.Model.extend({
			initialize : function () {
				this.setUrl();
			},

			urlRoot: "/db/galleries/",
			setUrl: function() {
				this.url = this.urlRoot + this.get('galleryNum');
			}
		});
		return App.GalleryModel
	});

