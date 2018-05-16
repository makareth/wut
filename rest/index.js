const express = require('express')
const app = express()
const util = require('util');

var routes = require('./routes/subscriptionsRoutes'); //importing route
routes(app); //register the route

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

