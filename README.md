# End to End FixPDQ testing
How to install the cypress setup
1. Install Node.js
2. Set Node.js Environment variable
3. Install VS Code

# How to run cypress tests
1. Clone repo - https://dev.azure.com/fixPDQ/fixPDQ/_git/fixPDQ
2. Open New Terminal
3. Go to project path/fixPDQ
4. Install project dependencies
 ==> Run Command <npm install>
OUT: It will install all required project dependencies
5. For UI Cypress
 ==> Run Command <npx cypress open>
OUT: It will open the Ui of cypress and shows all feature files
6. For headless
 ==> Run Command <npm run test>
7. To Generate report
 ==> Run Command <npm run report>
8. Tu run test on chrome and generate report
 ==> Run Command <npm run chrome-tests-run>
9. To run tests on browser stack
 ==> Run Command <browserstack-cypress run --sync>
 
# Remote Repository
https://dev.azure.com/fixPDQ/fixPDQ/_git/fixPDQ

# Definition of the Prerequisite
1. Cypress-Cucumber-Preprocessor ==> cypress-cucumber-preprocessor allows you to use “common” steps
3. Cucumber ==> Cucumber reads executable specifications written in plain text and validates that the software does what those specifications say.
2. Mocha ==>Mocha is a feature-rich JavaScript test framework running on node. ... Mocha tests run serially, allowing for flexible and accurate reporting.
3. multiple-cucumber-html-reporter = >multiple-cucumber-html-reporter is use to generate report in (.html).
