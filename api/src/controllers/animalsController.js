'use strict';

// http://www.redotheweb.com/2013/02/20/sequelize-the-javascript-orm-in-practice.html

var apiUtils = require('../utils/apiUtils');

var animalsModel = app.get('models').Animal;

// Retrieves all known animals
exports.getAll = function(req, res) {
    
    console.log(apiUtils.getlogHeader("getAll") );


    const promises = [
      new Promise(resolve => animalsModel.findAll())
    ];

    Promise.all(promises)
      .then(data => {
        res.json(apiUtils.createJsonResponse("success", "success", animal));
      })
      .then(data => {
        console.log("Second handler", data);
      })
      .catch(err => {
        res.send(err);
      });



    
    animal.find({}, function(err, animal) {
        if (err)
          res.send(err);
        res.json(apiUtils.createJsonResponse("success", "success", animal));
    });
};

// Adds a new animal
exports.addOne = function(req, res) {
  var new_animal = new Animal(req.body);

  new_animal.save(function(err, animal) {
    if (err)
      res.status(500).json(createJsonResponse("failed", "failed to persist", err));
    res.status(201).json(createJsonResponse("success", "success", animal));
  });
};
