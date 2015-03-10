Escuela.Views.Alumno = Backbone.View.extend({
  tagName : 'li',

  events : {
    'click .fa.fa-plus-circle' : 'showAlumno',
    'click .fa.fa-edit' : 'editAlumno',
    'click .fa.fa-close' : 'deleteAlumno'
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
  showAlumno : function (){
    Escuela.app.details.model.set(this.model.toJSON());
    return false;
  },
  editAlumno : function (){
    alert("editar a este alumno" )
  },
  deleteAlumno: function (){
     alert("eliminar a este alumno" )
  }
});