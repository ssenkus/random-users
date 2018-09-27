const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const app = express();


app.use(bodyParser.json({type: 'application/json'}));

app.listen(3000, () => {
    console.log('App listening on port 3000!');

    routes.configure(app);

    process.on('SIGINT', shutDown);
    process.on('SIGTERM', shutDown);
});

function shutDown() {
    console.log('\nShutting down!');
}