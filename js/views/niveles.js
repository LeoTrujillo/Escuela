var Backbone   = require('backbone'),
    Handlebars = require('handlebars'),
    NivelView  = require('../views/nivel'),
    $          = require('jquery');


module.exports = Backbone.View.extend({
  el : $("#niveles"),

  template : Handlebars.compile($("#nivel-template").html()),

  initialize : function (){
    this.listenTo(this.collection, "add", this.addOne, this);
  },
  render : function (){
    this.collection.forEach(this.addOne, this);
  },
  addOne : function (nivel){
    var nivelView = new NivelView({ model:nivel });
    this.$el.append(nivelView.render().el);
  }
});