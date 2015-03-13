var Backbone    = require('backbone'),
    Router      = require('./routers/router'),
    $           = require('jquery')
    Backbone.$  = $;
    //asignamos jquery a backbone

$(function () {
  Backbone.app = new Router();
});
