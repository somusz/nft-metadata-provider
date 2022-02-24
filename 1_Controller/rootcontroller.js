const CONFIG = require('../0_Resources/config');

//Route handler functions
function getRoot(req, res) {
    const welcomeMessage = getWelcomeMessage();
    res.send(welcomeMessage);
}

//Helper functions
function getWelcomeMessage() {
    const { welcomeMessage } = CONFIG;
    return welcomeMessage;
}

module.exports = {
    getRoot
}