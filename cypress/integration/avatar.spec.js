<reference types="cypress" />

describe('[Avatar]', function() {
    context('Component -> Editable', () => {
        beforeEach(() => {
            cy.visit('/?path=/story/');
            cy.get('#buttons-avatar').click();
            cy.get('#buttons-avatar--extra-small').click();
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
                .should('includes', '/buttons-avatar--extra-small');
            
            // Take a snapshot for visual diffing
            cy.percySnapshot();
        });
    
        it('Does have all controls', function () {
            cy.get('#buttons-avatar--extra-small').click();

            cy.get('#tabbutton-controls-4').should('have.text', 'Controls (4)');
            cy.percySnapshot();
        });
    
        it('Should have 0 accessibility violations', function () {
            cy.get('#buttons-avatar--extra-small').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-qacwg0').should('have.text', '0 Violations');
            cy.percySnapshot();
        });
    
        it('Does all test passed', function () {
            cy.get('#buttons-avatar--extra-small').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-fg630j').should('have.text', '7 Passes');
            cy.percySnapshot();
        });
    
        it('Should have 0 incomplete', function () {
            cy.get('#buttons-avatar--extra-small').click();
            cy.get('#tabbutton-accessibility').click();
    
            cy.get('.css-iau1th').should('have.text', '0 Incomplete');
            cy.percySnapshot();
        }); 
        
    })
})

