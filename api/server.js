const app = require('express')(),
    express = require('express'),
    bodyParser = require('body-parser'),
    config = require('./resources/config'),
    main = require('./src/index'),
    contacts = require('./src/contacts'),
    groups = require('./src/groups');

app.listen(config.port, () => {
    console.log('It`s work');
});

app.use(bodyParser.json());

app.use('/api/v1', main);
app.use('/api/v1', contacts);
app.use('/api/v1', groups);

app.use(express.static(__dirname + '/src/'));

module.exports = app;