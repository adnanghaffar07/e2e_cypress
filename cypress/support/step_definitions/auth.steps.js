import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const common = require('../pages/Common.json');
const auth = require('../pages/Auth.json');

When(/^I enter "(.*)" in the password field$/, pin => {
    cy.get(common.input_pin).filter(':visible').type(pin);
})

Then(/^I click on Submit button$/, () => {
    cy.get(common.btn_submit).click()
})

Then(/^I password error message$/, () => {
    cy.contains('Unable to log in with provided credentials.').should('be.visible')
})



Then('I click on Sign Up with Email Button', () => {
    cy.get(common.signup_with_email_button).filter(':visible').click({ force: true });
})

When('I click on Login label', () => {
    cy.contains('Login').last().should('be.visible').click();
})

Then('I click on Login Button', () => {
    cy.get(auth.btnLogin).filter(':visible').should('be.visible').click();
})

Then(/^I enter "(.*)" in the email field$/, email => {
    cy.get(common.input_email).filter(':visible').clear().type(email);
})

Then(/^I enter "(.*)" in the password field$/, pass => {
    cy.get(common.input_password).filter(':visible').clear().type(pass);
})

Then(/^I enter "(.*)" in the pin field$/, pass => {
    cy.get(auth.inputPIN).filter(':visible').clear().type(pass);
})
