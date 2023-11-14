// cypress/support/e2e.js

// command imports
import './commands/commands.js';

// plug-in initialization
const registerCypressGrep = require('@cypress/grep');
registerCypressGrep();
