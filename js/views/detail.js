var Backbone   = require('backbone'),
    Handlebars = require('handlebars'),
    $          = require('jquery');

module.exports = Backbone.View.extend({
  el : $(".details"),

  template : Handlebars.compile($("#detail-template").html()),

  initialize : function (){
    this.listenTo(this.model,"change", this.render);
  },
  render : function (){
    var alumno = this.model.toJSON();
    var html = this.template(alumno);
    this.$el.html(html);
  }
});