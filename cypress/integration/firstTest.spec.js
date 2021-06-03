/// <reference types="cypress"/>

describe('Our first suite', () => {

    it('first test', () => {

        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // search element by tag name
        cy.get('input');

        // search element by ID
        cy.get('#inputEmail1');

        // search element by class name
        cy.get('.input-full-width');

        // search element by attribute name
        cy.get('[placeholder]');

        // search element by attribute name and value
        cy.get('[placeholder="Email"]');

        // search element by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');

        // search element by tag name and attribute with value
        cy.get('input[placeholder="Email"]');

        // search element by two different attributes
        cy.get('[placeholder="Email"][type="email"]');

        // search element by tag name, attribute with value, id and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');

        // The most recommended way
        cy.get('[data-cy="imputEmail1"]');
    });

});

