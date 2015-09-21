function addressBook() {
	var contacts = [];
	return {
		addContact: function(contact) {
			contacts.push(contact);
		},
		getContact: function(i) {
			return contacts[i];
		},
	}
};