const TokenManager = require('../3_Data/tokenmanager');

async function getDataByTokenId(id) {
    const data = TokenManager.getDataByTokenId(id);
    return data;
}


module.exports = {
    getDataByTokenId
}