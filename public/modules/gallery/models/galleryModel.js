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
			},
			parse: function (data) {
				if(data) {
					data.previewPhotoUrl = data.galleryPath + '/preview/';
					data.fullFormatPhotoUrl = data.galleryPath + '/fullFormat/';
					return data;
				}
			}
		});
		return App.GalleryModel
	});

