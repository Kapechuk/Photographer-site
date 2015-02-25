define([
		'backbone',
		'app',
		'text!modules/contacts/templates/contacts.html'
	],
	function(Backbone, App, contactsTemplate) {
		App.ContactsView = Backbone.View.extend({
			template: _.template(contactsTemplate),
			render: function () {
				this.$el.html(this.template(App.messages));
				return this;
			}
		});
		return App.ContactsView
	});
