'use strict';

var mongoose = require('mongoose');
var animal = mongoose.model('Animals');
var apiUtils = require('../utils/apiUtils');

// Retrieves all known animals
exports.getAll = function(req, res) {
    
    console.log(apiUtils.getlogHeader("getAll") );

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
      res.status(500).json(createJsonResponse("failed", "failed to persist", err);
    res.status(201).json(createJsonResponse("success", "success", animal);
  });
};
