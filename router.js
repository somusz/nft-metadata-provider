//Resources
const express = require('express');
const RootController = require('./1_Controller/rootcontroller');
const TokenController = require('./1_Controller/tokencontroller');
const router = express.Router();

//Router
router.get('/', RootController.getRoot);
router.get('/api/token/:token_id', TokenController.getDataByTokenId);

//TODO: post -> update metadata

module.exports = router;