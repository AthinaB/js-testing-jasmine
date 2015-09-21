describe('Address Book', function() {
	it('should be able to add a contact', function() {
		var addressB = new addressBook(),
			thisContact = new Contact();
		addressB.addContact(thisContact);
		expect(addressB.getContact(0)).toBe(thisContact);
	});
});