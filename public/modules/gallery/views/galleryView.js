define([
		'backbone',
		'app',
		'text!modules/gallery/templates/photoContainerTemplate.html'
	],
	function(Backbone, App, photoContainerTemplate) {
		App.GalleryView = Backbone.View.extend({
			tagName: 'ul',
			className: 'lb-album',
			events: {
				'click .open' : 'openFullFormatPhoto',
				'click .lb-close' : 'closeFullFormatPhoto'
			},
			initialize : function () {
				var that = this;
				this.parent = this.options.parent;
				this.model.fetch().success(function () {
					that.render();
				});
			},
			template: _.template(photoContainerTemplate),
			render: function () {
				this.$el.html(this.template(this.model.toJSON()));
				this.$el.appendTo(this.parent.$el);
			},
			openFullFormatPhoto: function (e) {
				this.closeFullFormatPhoto();
				$(e.target).parent().siblings().addClass('target');
			},

			closeFullFormatPhoto: function () {
				if($('.target')){
					$('.lb-overlay').removeClass('target');
				}
			},

			initElem: function () {
			}

		});
		return App.GalleryView
	});

