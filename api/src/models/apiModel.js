'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnimalSchema = new Schema({
  // Animal chip identification number
  chip_number: {
      type: { type: String, uppercase: true },
      default: 'UNKNOWN' 
  },
  // Animal specie
  specie: {
    type: { type: String, uppercase: true },
    default: 'UNKNOWN',
    required: 'Please enter a specie'
  },
  // Animal breed
  breed: {
      type: { type: String, uppercase: true },
      default: 'UNKNOWN'
  },
  // Animal height in cm (SPA doesn't host <5 cm or >3m animals)
  height_cm: {
      type: { type: Number, min: 5, max: 3000 },
      required: 'Please enter an height value (in cm, between 5 and 3000)'
  },
  // Animal weight in g (SPA doesn't host <10g or >300kg animals)
  weight_g: {
      type: { type: Number, min: 10, max: 300000 },
      required: 'Please enter a weight value (in g, between 10 and 300000)'
  },
  opted_at: {
      type: Date,
      default: Date.now
  },
  description: {
      type: String,
      required: 'Please enter a description for this animal'
  }
});

module.exports = mongoose.model('Animals', AnimalSchema);