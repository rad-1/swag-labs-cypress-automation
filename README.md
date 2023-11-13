# 🛠 Cypress Framework 🛠
This repo contains an automated testing project for the Swag Labs demo [website](https://www.saucedemo.com) and serves as a playground to try out both new and existing features of the Cypress E2E testing framework.

## Table of Contents
- [Requirements](#requirements)
- [Recommended Tools](#recommended-tools)
- [Getting Started](#getting-started)
- [Included Scripts](#included-scripts)
- [Support Documentation](#support-documentation)
- [Contact Information](#contact-information)

## Requirements
* [Cypress System Requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
  * This project was built using:
    * Hardware: Apple M1, 16 GB
    * Software: MacOS 13.5.1 (22G90), Node 18.17.0
* Basic knowledge of JavaScript

## Recommended Tools
* [Node Package Manager](https://github.com/nvm-sh/nvm) for easy Node.js version control

## Scope
This project currently tests the following areas of the website:
* Login: Page load and validation for different username-password combinations
* Inventory: (coming soon...)
* Cart: (coming soon...)
* Checkout: (coming soon...)
* Navigation: (coming soon...)

## Getting Started
1. (Required) Clone the repository and switch to it via terminal

    ~~~ sh
    $ cd cypress-framework
    ~~~

2. (Required) Install and use [Node.js](https://nodejs.org/en) 18.17.0 or switch to it via [nvm](https://github.com/nvm-sh/nvm)

    ~~~ sh
    $ nvm use
    ~~~

3. (Required) Install dependencies

    ~~~ sh
    $ npm i
    ~~~

4. (Optional) Run tests headed

    ~~~ sh
    $ npm run cypress:open
    ~~~

5. (Optional) Run tests headless

    ~~~ sh
    $ npm run cypress:run
    ~~~

## Included Scripts
1. To run specific tests, `TAGS` can be replaced with tags such as `@login`, `@smoke`, etc. depending on the tag found in the test (`*.cy.js`) file

    ~~~ sh
    $ npm run cypress:tagged --tags=TAGS
    ~~~

2. To lint your code

    ~~~ sh
    $ npm run lint
    ~~~

3. To lint and fix your code:
    ~~~ sh
    $ npm run lint:fix
    ~~~

## Support Documentation
* [Cypress](https://www.cypress.io/) to learn more about the E2E testing framework
* [ESLint](https://eslint.org/) for additional information around basic code linting
* [@cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep) to learn more about running tests selectively

## Contact Information
Feel free to send a message to my inbox or connect with me on [LinkedIn](https://www.linkedin.com/in/joshuatipton/). I'm always looking for new opportunities. Let's chat!
