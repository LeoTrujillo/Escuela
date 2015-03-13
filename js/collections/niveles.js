var Backbone = require('backbone'),
    Nivel = require('../models/nivel');

module.exports = Backbone.Collection.extend({
  model : Nivel
});