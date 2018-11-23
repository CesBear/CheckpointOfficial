const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./server/config/keys');
const app = express();

mongoose.connect(keys.mongoConnection);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
app.use(bodyParser.json());

require('./server/routes/artistsRoute')(app);
require('./server/routes/discographyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('clients/build'));
    const path = require('path');
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname, 'clients', 'build', 'index.html'))
    });
}



app.listen(process.env.PORT||5000);
