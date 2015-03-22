define([
		'backbone',
		'app'
	],
	function(Backbone, App) {
		App.GalleryPreviewImgView = Backbone.View.extend({
			tagName: 'div',
			className: 'photo',
			initialize : function () {

			},
			render: function () {
				var $img = $('<img/>', {
					url: this.model.url
				});
				this.$el.append($img);
			}

		});
		return App.GalleryPreviewImgView
	});
