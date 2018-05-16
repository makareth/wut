'use strict';

var subscriptionsController = require('../controllers/subscriptionsController');

module.exports = function(app) {
  app.route('/api/subscriptions')
    .get(subscriptionsController.list)
    .post(subscriptionsController.add);

  app.route('/api/subscriptions/:sid')
    .get(subscriptionsController.getById)
    .put(subscriptionsController.updateById)
    .delete(subscriptionsController.deleteById);

};
