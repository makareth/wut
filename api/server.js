var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,

  Task = require('./src/models/apiModel'),
  bodyParser = require('body-parser');
  

app.set('models', require('./models'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/routes/apiRoutes');
routes(app);

app.listen(port);

app.use(function(req, res) {
  res.status(404).send();
});

console.log('Server started on ' + port);

module.exports = app;
