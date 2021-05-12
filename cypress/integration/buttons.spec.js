<reference types="cypress" />

describe('[Buttons]', function() {
    context('Component -> Editable', () => {
        
        beforeEach(() => {
            cy.visit('/?path=/story/');
            cy.get('#buttons-button').click();
            cy.get('#buttons-button--primary').click();
        })

        it('Is edit clickable', function () {
            /** 
            *** Arrange  - setup
            *** Visit webpage
            *** Query for an element
            *** Take action on element
            *** Interact with the element
            *** Assert - Make an assertion 
            **/
            cy.url()
                .should('includes', '/buttons-button--primary');
        });
    
        it('Does have all controls', function () {
            cy.get('#buttons-button--primary').click();
            cy.get('#tabbutton-controls-6').should('have.text', 'Controls (6)');
        });
    
        it('Should have 0 accessibility violations', function () {
            cy.get('#buttons-button--primary').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-qacwg0').should('have.text', '1 Violations');
        });

        it('Does all test passed', function () {
            cy.get('#buttons-button--primary').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-fg630j').should('have.text', '2 Passes');
        });
    
        it('Should have 0 incomplete', function () {
            cy.get('#buttons-button--primary').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-fg630j').should('have.text', '0 Incomplete');
        });
    });
})
   

