const {defineConfig} = require('cypress')

module.exports = defineConfig({
    viewportWidth: 1440,
    viewportHeight: 900,
    pageLoadTimeout: 20000,
    defaultCommandTimeout: 20000,
    reporter: 'cypress-mochawesome-reporter',

    reporterOptions: {
        embeddedScreenshots: true,
        inlineAssets: true,
    },

    e2e: {
        baseUrl: 'https://www.shellenergy.nl',
        retries: 2,
        setupNodeEvents(on) {
            require('cypress-mochawesome-reporter/plugin')(on)
        },
    },
})
