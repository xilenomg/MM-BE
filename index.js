const express = require('express');
const ConfigurationModule = require('./config/ConfigurationModule');

// App
const app = express();

// Set view engine as ejs
app.set('view engine', 'ejs');

// Set Public Folder as public
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/api', require('./router/api'));
app.use('/', require('./router/site'))

//Listen to Port
app.listen(ConfigurationModule.PORT, ConfigurationModule.HOST);
console.log(`Running on http://${ConfigurationModule.HOST}:${ConfigurationModule.PORT}`);