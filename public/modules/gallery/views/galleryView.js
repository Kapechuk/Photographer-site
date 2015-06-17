define([
		'backbone',
		'app',
		'text!modules/gallery/templates/photoContainerTemplate.html'
	],
	function(Backbone, App, photoContainerTemplate) {
		App.GalleryView = Backbone.View.extend({
			tagName: 'ul',
			className: 'lb-album',
			selectors: {},
			events: {
				'click .open' : 'openFullFormatPhoto',
				'click .lb-close' : 'closeFullFormatPhoto',
				'click .gallery-arrows' : 'getPhoto'
			},
			initialize : function () {
				this.addEventListeners();
				this.parent = this.options.parent;
			},
			template: _.template(photoContainerTemplate),
			render: function () {
				this.selectors.rightArrow = $('#right-arrow');
				this.selectors.leftArrow = $('#left-arrow');
				this.selectors.arrows = $('.gallery-arrows');
				this.$el.html(this.template(this.model.toJSON()));
				this.$el.appendTo(this.parent.$el);
			},
			getPhoto: function (e) {
				var button = $(e.target);
				var photoContainer = $('.target');

				switch (button.id) {
					case "right-arrow" :
						this.renderFullFormatPhoto(photoContainer);
						break;
					case "left-arrow" :
						this.renderFullFormatPhoto(photoContainer);
						break;
					default :
						break;
				}
			},
			openFullFormatPhoto: function (e) {
				var photoContainer = $(e.target).parent().siblings();
				this.renderFullFormatPhoto(photoContainer)
			},
			renderFullFormatPhoto: function (photoContainer) {
				this.closeFullFormatPhoto();
				photoContainer.addClass('target');
				this.showButtons(photoContainer);
			},
			closeFullFormatPhoto: function () {
				if($('.target')){
					$('.lb-overlay').removeClass('target');
					this.hideButtons();
				}
			},
			showButtons: function (photoContainer) {
				var currentPhotoName = photoContainer.data('name');
				var firstPhotoName = this.model.get('photos')[0];
				var lastPhotoName = this.model.get('photos')[this.model.get('photos').length - 1];

				switch(currentPhotoName) {
					case firstPhotoName :
						this.selectors.rightArrow.show();
						this.selectors.leftArrow.hide();
						break;
					case lastPhotoName :
						this.selectors.rightArrow.hide();
						this.selectors.leftArrow.show();
						break;
					default :
						this.selectors.arrows.show();
				}
			},
			hideButtons: function () {
				$('.gallery-arrows').hide();
			},
			fetchData: function () {
				var that = this;
				this.trigger('loading:start');
				that.model.fetch().then(function () {
					that.trigger('loading:stop');
					that.render();
				});
			},
			startLoading: function () {
				$('.spinner').show();
			},
			stopLoading: function () {
				$('.spinner').hide();
			},
			addEventListeners: function () {
				this.on('loading:start', this.startLoading, this);
				this.on('loading:stop', this.stopLoading, this);
			}
		});
		return App.GalleryView
	});

