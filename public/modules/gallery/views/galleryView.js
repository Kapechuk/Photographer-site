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
				this.addEventListeners();
				this.parent = this.options.parent;
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
			fetchData: function () {
				var that = this;
				this.trigger('loading:start');
				that.model.fetch().then(function () {
					that.trigger('loading:stop');
					that.render();
				});
			},
			closeFullFormatPhoto: function () {
				if($('.target')){
					$('.lb-overlay').removeClass('target');
				}
			},

			startLoading: function () {
				$('.spinner').show();
			},

			stopLoading: function () {
				$('.spinner').hide();
			},

			initElem: function () {
			},

			addEventListeners: function () {
				this.on('loading:start', this.startLoading, this);
				this.on('loading:stop', this.stopLoading, this);
			}

		});
		return App.GalleryView
	});

