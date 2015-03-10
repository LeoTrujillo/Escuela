Escuela.Views.Alumno = Backbone.View.extend({
  tagName : 'li',

  className :'alumnito',

  events : {
    'click .fa.fa-plus-circle' : 'show'
  },

  template : Handlebars.compile($("#alumno-template").html()),

  initialize : function (){
    this.listenTo(this.model, "change", this.render, this);
  },
  render : function (){
    var alumno = this.model.toJSON();
    var html = this.template(alumno);
    this.$el.html(html);
    return this;
  },
  show : function (){
    Escuela.app.detail.model.set(this.model.toJSON());
    return false;
  }
});