var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./src/models/apiModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://xxx:xxx@xxx-shard-00-00-5xaki.mongodb.net:27017,xxx-shard-00-01-5xaki.mongodb.net:27017,xxx-shard-00-02-5xaki.mongodb.net:27017/test?ssl=true&replicaSet=xxx-shard-0&authSource=admin');

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
