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

    it('second test', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('[data-cy="signInButton"]');

        cy.contains('Sign in');

        cy.contains('[status="warning"]', 'Sign in');

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click();
    });

    it('then and wrap methods', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
            expect(emailLabelFirst).to.equal('Email');
            expect(passwordLabelFirst).to.equal('Password');

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text();
                expect(passwordLabelFirst).to.equal(passwordSecondText);

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password');
            });
        });
    });

    it('invoke command', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // option 1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address');

        // option 2
        cy.get('[for="exampleInputEmail1"]').then(label => {
            expect(label.text()).to.equal('Email address');
        });

        // option 3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => {
            expect(text).to.equal('Email address');
        });

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            // .should('contain', 'checked');
            .then(classValue => {
                expect(classValue).to.contain('checked');
            });
    });

    it.only('assert property', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click();
            cy.get('nb-calendar-day-picker').contains('21').click();
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 21, 2021');
        });
    });

});

