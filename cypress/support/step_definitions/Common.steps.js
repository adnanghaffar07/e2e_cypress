const common = require('../pages/Common.json');
import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I visit the app url', () => {
  cy.visit(Cypress.env('appurl'));
});

Given('I visit the asl app url', () => {
  cy.visit(Cypress.env('aslAppUrl'));
});

When('I see app logo',()=>{
  cy.get('[alt="logo"]').first().should('be.visible');
})

Then(/^I click on "(.*)" button$/, btn => {
  cy.contains(btn).should('be.visible').click({force:true});
})

Then("I can't see user dashboard", ()=>{
  cy.contains('Dashboard').should('not.be.visible');
})

Then(/^I see "(.*)" on user dashboard$/, label => {
  cy.contains(label).should('be.visible');
})

Then(/^I see "(.*)" menu in top bar$/, label => {
  cy.contains(label).should('be.visible');
})