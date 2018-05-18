'use strict';

var provider = require('subscriptionsProvider');

exports.list = function(req, res, next) {
    console.log("list() ");
    provider.list(req, res, next);

};

exports.add = function(req, res, next) {
    console.log("add() ");
};

exports.getById = function (req, res, next) {
    console.log("getById() ");
};

exports.updateById = function (req, res, next) {
    console.log("updateById() ");
};

exports.deleteById = function (req, res, next) {
    console.log("deleteById() ");
};

