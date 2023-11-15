// cypress/support/e2e.js

// command imports
import './commands/base.commands.js';
import './commands/login.commands.js';

// plug-in initialization
const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();
