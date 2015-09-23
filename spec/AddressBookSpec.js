describe('Address Book', function() {
	it('should be able to add a contact', function() {
		var addressB = new addressBook(),
			thisContact = new Contact();
		addressB.addContact(thisContact);
		expect(addressB.getContact(0)).toBe(thisContact);
	});
	it('should be able to delete a contact', function() {
		var addressB = new addressBook(),
			thisContact = new Contact();
		addressB.addContact(thisContact);
		addressB.deleteContact(0);
		expect(addressB.getContact(0)).not.toBeDefined();
	});
});