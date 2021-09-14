describe('ToDo React', () => {
	
	Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false
		});

	before(() => {
		cy.visit('https://www.ebay.com.au/');
	});

	it('should show the correct page title', () => {
		cy.title().should('include', 'eBay');
	});

	it('should click on search bar', () => {
	
		cy.get('input#gh-ac').type('tables');
		cy.get('select#gh-cat').select('Antiques').should('have.value', '20081');
		cy.get('input#gh-btn').click();
		

		
	});

	it('should click on the specific link in the page', () => {
		cy.get('.s-item__title').each(($el, index, $list) => {
			if($el.text() ==='Antique Dining Table'){
				cy.log("log->", $el.text())
				$el.click();
				
				
			}
	});
});
})



