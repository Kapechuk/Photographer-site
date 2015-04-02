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
				var $img = $('<img/>', {});
				var path = this.model.get('path') + this.model.get('fileName');
				$img.attr('data-original', path);
				$img.attr('height', 230);
				$img.attr('width', 305);
				this.$el.append($img);
				return this;
			}

		});
		return App.GalleryPreviewImgView
	});
