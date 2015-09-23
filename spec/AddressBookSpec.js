describe('Address Book', function() {
	var addressB,
		thisContact;

	beforeEach(function() {
		addressB = new addressBook();
		thisContact = new Contact();
	});

	it('should be able to add a contact', function() {
		addressB.addContact(thisContact);
		expect(addressB.getContact(0)).toBe(thisContact);
	});

	it('should be able to delete a contact', function() {
		addressB.addContact(thisContact);
		addressB.deleteContact(0);
		expect(addressB.getContact(0)).not.toBeDefined();
	});
});

describe('Async Address Book', function() {
	var addressB = new addressBook();

	/*
	 * the func getAsyncContacts should take as param
	 * a callback func and invokes it gets a response
	*/
	beforeEach(function(done) {
		addressB.getAsyncContacts(function() {
			done();
		});
	});

	it('should get the contacts async', function(done) {
		expect(addressB.asyncCompleted).toBe(true);
		done();
	});
});