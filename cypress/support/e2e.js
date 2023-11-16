// cypress/support/e2e.js

// command imports
import './commands/common.commands.js'
import './commands/login.commands.js'
import './commands/inventory.commands.js'

// plug-in initialization
const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()
