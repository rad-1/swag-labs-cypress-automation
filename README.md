# 🛠 Swag Labs - Cypress Automation 🛠
This repo contains an automated testing project for the Swag Labs demo [website](https://www.saucedemo.com) and serves as a playground to try out both new and existing features of the Cypress E2E testing framework. Cypress tests are currently written in JavaScript.

## Table of Contents
- [Requirements](#requirements)
- [Recommended Tools](#recommended-tools)
- [Getting Started](#getting-started)
- [Included Scripts](#included-scripts)
- [Support Documentation](#support-documentation)
- [Contact Information](#contact-information)

## Requirements
* [Node.js](https://nodejs.org/en/) 18.x or 20.x and above
* [Cypress System Requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
* Basic knowledge of JavaScript

Note that the project was built using:
* Hardware: Apple M1, 16 GB
* Software: MacOS 13.5.1 (22G90), Node 18.17.0

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
    $ npx cypress open
    ~~~

5. (Optional) Run tests headless

    ~~~ sh
    $ npx cypress run
    ~~~

## Included Scripts
1. To run tests with specific tags, the value of `TAGS` can be replaced with tags found in each test file
<br>
<br/>
For example, `@smoke` and `@login` are test tags that can be found in the `cypress/e2e/login.cy.js` test file

    ~~~ sh
    $ npm run tagged --TAGS=@smoke
    ~~~

3. To lint your code

    ~~~ sh
    $ npm run lint
    ~~~

4. To lint and fix your code:
    ~~~ sh
    $ npm run lint:fix
    ~~~

## Support Documentation
* [Cypress](https://www.cypress.io/) to learn more about the E2E testing framework
* [ESLint](https://eslint.org/) for additional information around basic code linting
* [@cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep) to learn more about running tests selectively

## Contact Information
Feel free to send a message to my inbox or connect with me on [LinkedIn](https://www.linkedin.com/in/joshuatipton/). I'm always looking for new opportunities. Let's chat!
