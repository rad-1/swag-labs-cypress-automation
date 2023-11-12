# Cypress Framework
A playground for testing new Cypress features and updates!

## Table of Contents
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Package Scripts](#package-scripts)
- [Support Documentation](#support-documentation)
- [Contact Information](#contact-information)

## Requirements
* macOS 10.9 and above (Intel or Apple Silicon 64-bit (x64 or arm64))
* Cypress supports Node.js v18.x or v20.x and above, but this project was built using v18.17.0
* Some basic JavaScript knowledge

## Getting Started
1. (Required) Clone the repository and switch to it via terminal

    ~~~ sh
    $ cd cypress-framework
    ~~~

2. (Required) Install and use [Node.js](https://nodejs.org/en) v18.17.0 or switch to it via [nvm](https://github.com/nvm-sh/nvm)

    ~~~ sh
    $ nvm use
    ~~~

3. (Required) Install dependencies found in `package.json`

    ~~~ sh
    $ npm i
    ~~~

4. (Optional) Run the tests, headed

    ~~~ sh
    $ npx cypress open
    ~~~

5. (Optional) Run the tests, headless

    ~~~ sh
    $ npx cypress run
    ~~~

## Package Scripts
* `$ npm run cypress:open` to run all Cypress tests, headed
* `$ npm run cypress:run` to run all Cypress tests, headless
* `$ npm run cypress:tagged --tags=TAGS` to run Cypress tests, headless, where `TAGS` can be replaced with tags such as `@loginPage`, `@loginSanity`, `@loginPositive`, and `@loginNegative`
* `$ npm run lint` to lint your code
* `$ npm run lint:fix` to lint and fix your code

## Support Documentation
* [Cypress](https://www.cypress.io/) for documentation on test creation and debugging
* [ESLint](https://eslint.org/) for information around basic code linting

## Contact Information
Feel free to send a message to my inbox or connect with me on [LinkedIn](https://www.linkedin.com/in/joshuatipton/). I'm always looking for new opportunities. Let's chat!