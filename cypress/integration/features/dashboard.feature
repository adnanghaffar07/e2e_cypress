Feature: Dashboard
        Scenario: As a user I see menu options on landing page top bar
            Given I visit the app url
             When I see app logo
              And I see "Features" menu in top bar
              And I see "Pricing" menu in top bar
              And I see "Login" menu in top bar
             Then I see "Sign up" menu in top bar