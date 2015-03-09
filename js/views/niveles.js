Escuela.Views.Niveles = Backbone.View.extend({
  el : $("#niveles"),

  template : Handlebars.compile($("#nivel-template").html()),

  initialize : function (){
    this.listenTo(this.collection, "add", this.addOne, this);
  },
  render : function (){
    this.collection.forEach(this.addOne, this);
  },
  addOne : function (nivel){
    var nivelView = new Escuela.Views.Nivel({ model:nivel });
    this.$el.append(nivelView.render().el);
  }
});