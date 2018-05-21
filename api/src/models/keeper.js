'use strict'

var Sequelize = require('sequelize')

const keeper = Sequelize.define('keeper', {
    name: { type: Sequelize.STRING(20), allowNull: false }
})
