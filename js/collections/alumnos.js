var Backbone = require('backbone'),
    Alumno = require('../models/alumno');

module.exports = Backbone.Collection.extend({
  model : Alumno
});