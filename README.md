# 🛠 Swag Labs - Cypress Automation 🛠
This repo contains an automated testing project for the Swag Labs demo [website](https://www.saucedemo.com) and serves as a playground to try out both new and existing features of the Cypress E2E testing framework. Cypress tests are currently written in JavaScript.

## A Note From The Author
This project aims to follow best practices recommended by the Cypress.io team. More information around those best practices can be found [here](https://docs.cypress.io/guides/references/best-practices). Additionally, I chose to implement inline selectors over POM to simplify code, enhance readability, and offer flexibility for this smaller project. I think it's important to recognize that it's a trade-off between simplicity and the organizational benefits of POM.

## Table of Contents
- [A Note From The Author](#a-note-from-the-author)
- [Requirements](#requirements)
- [Recommended Tools](#recommended-tools)
- [Getting Started](#getting-started)
- [Included Scripts](#included-scripts)
- [Support Documentation](#support-documentation)
- [Contact Information](#contact-information)

## Requirements
* [Node.js and NPM](https://nodejs.org/en/) 18.x or 20.x and above
* [Cypress System Requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
* Basic knowledge of JavaScript

Note that the project was built using:
* Hardware: Apple M1, 16 GB
* Software: MacOS 13.5.1 (22G90), Node 18.17.0

## Recommended Tools
* [Node Version Manager](https://github.com/nvm-sh/nvm) for easy Node.js version control

## Scope
This project currently tests the following areas of the website:
* Login: Page load and validation for different username-password combinations
* Inventory: Product and price validation, and product sorting by name and price
* Navigation: Verify hamburger menu links

## Getting Started
1. (Required) Clone the repository and switch to it via terminal

    ~~~ sh
    $ git clone git@github.com:rad-1/swag-labs-cypress-automation.git
    ~~~

2. (Required) Install a supported version of [Node.js and NPM](https://nodejs.org/en) or install [Node Version Manager](https://github.com/nvm-sh/nvm) to install and use the Node.js version found in the `.nvmrc` file

3. (Required) Install dependencies for the web application and Cypress tests

    ~~~ sh
    $ cd swag-labs-cypress-automation
    $ npm i
    ~~~

4. (Optional) Run tests headed

    ~~~ sh
    $ npm run cy:open
    ~~~

5. (Optional) Run tests headless

    ~~~ sh
    $ npm run cy:run
    ~~~

## Included Scripts
1. To run tests with specific tags where the value of the `--tags` arg in the script can be replaced with tags found in each test file or individual test\
\
For example, `@smoke`, `@inventory`, and `@navigation` are test tags that can be found in the `e2e` test files.

    ~~~ sh
    $ npm run cy:tagged --tags='@smoke' # Run test file or specific tests that contain the @smoke tag
    # OR
    $ npm run cy:tagged --tags='@inventory @navigation' # Run test file or specific tests that contain either of the @inventory or @navigation tags
    ~~~

3. To lint your code

    ~~~ sh
    $ npm run lint
    ~~~

4. To lint and fix your code
    ~~~ sh
    $ npm run lint:fix
    ~~~

## Support Documentation
* [Cypress](https://www.cypress.io/) to learn more about the E2E testing framework
* [ESLint](https://eslint.org/) for additional information around basic code linting
* [@cypress/grep](https://github.com/cypress-io/cypress/tree/develop/npm/grep) to learn more about running tests selectively

## Contact Information
Feel free to send a message to my inbox or connect with me on [LinkedIn](https://www.linkedin.com/in/joshuatipton/). I'm always looking for new opportunities. Let's chat!
