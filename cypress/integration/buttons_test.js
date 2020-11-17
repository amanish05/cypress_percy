/// <reference types="cypress" />

context('hubspot', () => {
    beforeEach(() => {
        cy.visit('/?path=/story/');
        cy.get('#buttons-button').click();
        cy.get('#buttons-button-component').click();
    })

    
    describe('Components', function() {
        describe('Editable Buttons', function() {
            it(' [Buttons] Is edit clickable', function () {
                /** 
                *** Arrange  - setup
                *** Visit webpage
                *** Query for an element
                *** Take action on element
                *** Interact with the element
                *** Assert - Make an assertion 
                **/
    
                cy.url()
                    .should('includes', '/buttons-button-component--editable');
            });
    
            it(' [Buttons] Does have Six controls', function () {
                cy.get('#buttons-button-component--editable').click();
                cy.get('#tabbutton-controls-6').should('have.text', 'Controls (6)');
            });

            it(' [Buttons] Should have 0 accessibility violations', function () {
                cy.get('#buttons-button-component--editable').click();
                cy.get('#tabbutton-accessibility').click();

                cy.get('.css-qacwg0').should('have.text', '1 Violations');
            });

            it(' [Buttons] Should have 0 incomplete', function () {
                cy.get('#buttons-button-component--editable').click();
                cy.get('#tabbutton-accessibility').click();

                cy.get('.css-fg630j').should('have.text', '2 Passes');
            });
        })
    })
})
