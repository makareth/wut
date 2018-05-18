'use strict';

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/postgres';
var db = pgp(connectionString);

// add query functions
// http://mherman.org/blog/2016/03/13/designing-a-restful-api-with-node-and-postgres/#.WvvuiHWFPCI
// http://vitaly-t.github.io/pg-promise/Database.html#none
module.exports = {
  list: list,
  add: add,
  getById: getById,
  updateById: updateById,
  deleteById: deleteById
};

function list(req, res, next) {
    db.any('SELECT * from core_subscriptions')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL subscriptions'
          });
      })
      .catch(function (err) {
        return next(err);
      });
}

function add(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('INSERT INTO core_subscription(name, breed, age, sex)' +
        'values(${name}, ${breed}, ${age}, ${sex})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one subscription'
          });
      })
      .catch(function (err) {
        return next(err);
      });
}

function getById(req, res, next) {
    var subscriptionId = parseInt(req.params.id);
    db.one('SELECT * FROM core_subscriptions WHERE id = $1', subscriptionId)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ONE subscription'
          });
      })
      .catch(function (err) {
        return next(err);
      });
}

function updateById(req, res, next) {
    db.none('UPDATE core_subscription SET name=$1, breed=$2, age=$3, sex=$4 WHERE id=$5',
      [req.body.name, req.body.breed, parseInt(req.body.age),
        req.body.sex, parseInt(req.params.id)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated subscription'
          });
      })
      .catch(function (err) {
        return next(err);
      });
}

function deleteById(req, res, next) {
    var subscriptionId = parseInt(req.params.id);
    db.result('DELETE FROM core_subscription WHERE id = $1', subscriptionId)
      .then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} subscription`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
}