var Sequelize = require('sequelize');
var config    = require('config').database;  // we use node-config to handle environments

// initialize database connection
var sequelize = new Sequelize(
  config.name,
  config.username,
  config.password,
  config.options
);

// load models
var models = [
  'keeper',
  'animal'
];
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
  /* TODO */
  /*m.PhoneNumber.belongsTo(m.User);
  m.Task.belongsTo(m.User);
  m.User.hasMany(m.Task);
  m.User.hasMany(m.PhoneNumber);*/
})(module.exports);

// export connection
module.exports.sequelize = sequelize;