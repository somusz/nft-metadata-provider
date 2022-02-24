const { handleError } = require('../0_Resources/errorhandler');
const TokenService = require('../2_Service/tokenservice');

//Route handler functions
async function getDataByTokenId(req, res) {
    try {
        const tokenId = parseInt(req.params.token_id).toString();
        const data = await TokenService.getDataByTokenId(tokenId);
        res.send(data);
    } 
    catch (error) {
        handleError({ res, error });
    }
}

module.exports = {
    getDataByTokenId
}