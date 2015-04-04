define([
		'backbone',
		'app'
	],
	function(Backbone, App) {
		App.GalleryPreviewImgView = Backbone.View.extend({
			tagName: 'div',
			className: 'photo',

			events: {
				"click img": "openGallery"
			},

			initialize : function () {

			},

			render: function () {
				var $img = this.initElem();
				this.$el.append($img);
				return this;
			},

			initElem: function () {
				var $img = $('<img/>', {});
				var path = this.model.get('path') + this.model.get('fileName');
				$img.attr('data-original', path);
				$img.attr('height', 230);
				$img.attr('width', 305);
				return $img;
			},

			openGallery: function () {
				var route = this.model.get('galleryUrl') + this.model.get('id');
				App.vent.trigger('change:route', route, { trigger: true });
			}

		});
		return App.GalleryPreviewImgView
	});
