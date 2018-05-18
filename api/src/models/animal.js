'use strict'

var Sequelize = require('sequelize')

const Animal = sequelize.define('Animal', {
    chip_number: { type: Sequelize.STRING(6), defaultValue: 'UNKNOWN'},
    height_cm: { type: Sequelize.INTEGER, allowNull: false, validate: {min: 10, max: 300000} },
    opted_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }
})
