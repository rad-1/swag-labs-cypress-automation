/* eslint-disable max-len */
// cypress.config.js

const { defineConfig } = require('cypress')
const fs = require('fs')

module.exports = defineConfig({
    env: {
        username: 'standard_user',
        password: 'secret_sauce',
    },
    e2e: {
        setupNodeEvents(on, config) {
            on('after:spec', (spec, results) => {
                if (results && results.video) {
                    // Do we have failures for any retry attempts?
                    const failures = results.tests.some((test) =>
                        test.attempts.some((attempt) => attempt.state === 'failed')
                    )
                    if (!failures) {
                        // delete the video if the spec passed and no tests retried
                        fs.unlinkSync(results.video)
                    }
                }
            })
            require('@cypress/grep/src/plugin')(config)
            return config
        },
        baseUrl: 'https://www.saucedemo.com'
    },
    reporter: 'mochawesome',
    reporterOptions: {
        reportFilename: '[status]_[datetime]-[name]-report',
        timestamp: 'shortDate',
        quiet: true,
    },
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: true,
    watchForFileChanges: true,
    retries: {
        'openMode': 0,
        'runMode': 2
    },
    pageLoadTimeout: 30000
})
