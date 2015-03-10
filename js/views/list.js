Escuela.Views.List = Backbone.View.extend({
  el : $(".lista-al > .list"),

  initialize : function (){
    this.listenTo(this.collection, "add" , this.addOne, this);
    this.listenTo(this.collection, "reset" , this.render, this);
  },
  render : function (){
    this.$el.empty();
    this.addAll();
  },
  addOne : function (alumno){

    var alumnoView = new Escuela.Views.Alumno({ model : alumno});
    this.$el.append(alumnoView.render().el);

  },
  addAll : function (){
    this.collection.forEach(this.addOne, this);
  }
});