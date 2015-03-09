Escuela.Views.Nivel = Backbone.View.extend({

  tagName : "article",
  className : "label-primary",

  events : {
    'click' : 'navigate'
  },

  template : Handlebars.compile($("#nivel-template").html()),

  initialize : function (){
    this.listenTo(this.model, "change", this.render, this);
  },

  render: function (){
    var nivel = this.model.toJSON();
    var html = this.template(nivel);
    this.$el.html(html);
    return this;
  },

  navigate : function (){
    Escuela.app.navigate("nivel/" + this.model.get("name"), { trigger:true });
  }
});