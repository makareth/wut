'use strict';

module.exports = function(app) {
  var api = require('../controllers/apiController');

  app.route('/animals')
    .get(api.getAll)
    .post(api.addOne);

};
