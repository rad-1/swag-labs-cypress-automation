// Cypress configuration file

const { defineConfig } = require('cypress');
const fs = require('fs');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // For use with Cypress Cloud
            on('after:spec', (spec, results) => {
                if (results && results.video) {
                    // Do we have failures for any retry attempts?
                    const failures = results.tests.some((test) =>
                        test.attempts.some((attempt) => attempt.state === 'failed')
                    );
                    if (!failures) {
                    // delete the video if the spec passed and no tests retried
                        fs.unlinkSync(results.video);
                    }
                }
            });
        },
        baseUrl: 'https://www.saucedemo.com'
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
});
