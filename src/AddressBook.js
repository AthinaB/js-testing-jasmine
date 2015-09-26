function addressBook() {
	var contacts = [];
	return {
		addContact: function(contact) {
			contacts.push(contact);
		},
		getContact: function(i) {
			return contacts[i];
		},
		deleteContact: function(i) {
			return contacts = contacts.splice(1, 1);
		},
		asyncCompleted: false,
		// cb is used in order to invoke done of Jasmine
		getAsyncContacts: function(cb) {
			var self = this;
			setTimeout(function() {
				self.asyncCompleted = true;
				if (cb) {
					return cb();
				}
			}, 300);
		}
	}
};