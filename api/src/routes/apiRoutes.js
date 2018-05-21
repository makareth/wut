'use strict';

module.exports = function(app) {
  var animalsController = require('../controllers/animalsController');
  var keepersController = require('../controllers/keepersController');

  app.route('/animals')
    .get(animalsController.findAll)
    .post(animalsController.addOne);

  app.route('/keepers')
    .get(keepersController.findAll);
};
