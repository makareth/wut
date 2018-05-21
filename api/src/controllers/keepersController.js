'use strict';

// http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html

var apiUtils = require('../utils/apiUtils');

var keepersModel = app.get('models').Keeper;

// Retrieves all known keepers
exports.getAll = function(req, res) {
    
    console.log(apiUtils.getlogHeader("getAll") );


    const promises = [
      new Promise(resolve => keepersModel.findAll())
    ];

    Promise.all(promises)
      .then(data => {
        res.json(apiUtils.createJsonResponse("success", "success", keeper));
      })
      .then(data => {
        console.log("Second handler", data);
      })
      .catch(err => {
        res.send(err);
      });



    
    animal.find({}, function(err, keeper) {
        if (err)
          res.send(err);
        res.json(apiUtils.createJsonResponse("success", "success", keeper));
    });
};
