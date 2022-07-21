Feature: Login

        Scenario: As a user I can't login with invalid credentials
            Given I visit the app url
             When I click on Login label
              And I enter "3889_test@sellermetrix.com" in the email field
              And I enter "Uk!d(cD9)" in the password field
              And I click on Login Button
             Then I password error message