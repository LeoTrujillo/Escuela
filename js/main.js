Escuela = {}; //crear un namespaces un objeto literal en js para poner los elementos en el global

Escuela.Alumno = Backbone.Model.extend({});

Escuela.Alumnos = Backbone.Collection.extend({
  model: Escuela.Alumno
});

Escuela.AlumnoView = Backbone.View.extend({
  events :{
    "click .fa.fa-edit" : "edit"
  },

  tagName : "li",

  className : "item-al",


  template : Handlebars.compile($("#alumno-template").html()), //compilo el temp con handlebars

  initialize: function () {
    //el evento donde vamos a escuchar es este modelo, el evento a escuchar es el change y el mentodo que se ejecuta es el render y pasamos es scope
    //el ultimo parametro lo pasamos para que funciones en la funcion render sin que se pase al elemento global osea al window
    this.listenTo(this.model, "change", this.render, this);
  },

  render : function (){
   // var alumno = this.model; //para obtener el modelo alumno
   // var nombre = alumno.get('nombre'); //obtengo el nombre del objeto alumno para pintar
   // var grado = alumno.get('grado'); //obtengo la propiedad grado del objeto alumno para pintar

    //guardo en una variable este template compilado y paso los datos del en formato json
    var html = this.template(this.model.toJSON());
    //helper de backbone $el para sustituir $("nombre del elemento")
    this.$el.html(html);

  },

  edit : function (e){
    alert(this.model.get("nombre"));
  }

});

Escuela.Router = Backbone.Router.extend({
  routes: {
    "" : "index",
    "nivel/:level" : "level",
    "help" : "help"

  },
  index : function (){
    console.log("estoy en el index");
  },
  level : function (level){
    console.log("Nivel : " + level);
  },
  help : function (){
    console.log("Estas en la ayuda");
  }
});

//buena practica es difinir la variable app que contiene la instancia del enrutador es como la parte pruncipal de la aplicaci´on que maneja todo el sistema de enrutamiendo
Escuela.app = new Escuela.Router();
Backbone.history.start();

window.Escuela = Escuela;   //dejamos el objeto Escuela en el global para poder instanciar