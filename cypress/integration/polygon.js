var i = 0;
for (i = 0; i < 100 ; i++) {     
    describe('Polygon Mumbai Batch Receive', () => {
        it('Ask for matic tokens', () => {
            cy.visit('https://faucet.polygon.technology/');
            let address = "0x123...";
            cy.get('.input-box input').type(address);
            cy.contains('Submit').click();
            cy.wait(1000);
            cy.get('.modal-dialog .btn-primary').click();
            cy.wait(60000);
        })
    })
}
