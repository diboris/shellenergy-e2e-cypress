import 'cypress-mochawesome-reporter/register'
import '@cypress/xpath'

Cypress.on('window:before:load', window => {
    // set cookie to disable "Accept cookies" popup
    window.document.cookie = '_evidon_consent_cookie={"gpc":0,"consent_type":1}'
})

Cypress.on('uncaught:exception', () => false)
