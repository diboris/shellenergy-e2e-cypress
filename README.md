## Shellenergy e2e tests [![pipeline status](https://github.com/diboris/shellenergy-e2e-cypress/actions/workflows/actions.yml/badge.svg)](https://github.com/diboris/shellenergy-e2e-cypress/actions)

Automation tests with [Cypress](https://www.cypress.io/) 

## Run

Run in headless mode in Chrome or Firefox or Electron browser

```shell
npm install
npm cy:run:chrome
npm cy:run:firefox
npm cy:run:electron
```

## Reports

HTML reports are generated to **cypress/reports** folder.
[cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) library is used for reporting.

To trigger the e2e tests to run in GitHub actions open https://github.com/diboris/shellenergy-e2e-cypress/actions/workflows/actions.yml page and click the **Run workflow** dropdown and click the **Run workflow** button.

## Local execution

- Clone the repository 
- Via Jetbrains IDE
  - open project in ide
  - install 'NodeJS' plugin if you don’t have it
  - in package.json file click on the Run icon next to the `cypress:open` target.
