const express = require('express');
const ConfigurationModule = require('./config/ConfigurationModule');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('MaxMilhas');
});

app.listen(ConfigurationModule.PORT, ConfigurationModule.HOST);
console.log(`Running on http://${ConfigurationModule.HOST}:${ConfigurationModule.PORT}`);