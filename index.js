//Resources
const express = require('express');
const router = require('./router');
const PORT = process.env.PORT || 5000;
const app = express();

//App setup
app.set('port', PORT);
app.use('/', router);
app.listen(app.get('port'), appListener);

//Helper functions
function appListener() {
    console.log('Node app is running on port: ', app.get('port'));
}