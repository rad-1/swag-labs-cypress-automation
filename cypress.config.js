// Cypress configuration file

const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require('@cypress/grep/src/plugin')(config);
            return config;
        },
        baseUrl: 'https://www.saucedemo.com/'
    },
    reporter: 'spec',
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: true,
    watchForFileChanges: true,
    retries: {
        'openMode': 2,
        'runMode': 2
    },
    pageLoadTimeout: 30000,
    grepOmitFiltered: true
});
