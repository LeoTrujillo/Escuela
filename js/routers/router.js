Escuela.Router = Backbone.Router.extend({
  routes:{
    "" : "index", //solo me mostrara los niveles es decir  primaria y secundaria
    "nivel" : "nivel/:nombre"
  },

  initialize : function (){
    this.current = {};
    this.jsonData = {};
    this.niveles = new Escuela.Collections.Niveles();
    this.alumnos = new Escuela.Collections.Alumnos();
    this.alumnolista = new Escuela.Views.List({collection: this.alumnos});
    this.nivellista = new Escuela.Views.Niveles({collection: this.niveles});
    this.details = new Escuela.Views.Detail({model: new Escuela.Models.Alumno()});

    Backbone.history.start();
  },
  index : function (){
    this.fetchData();
  },
  //function fetchData
  fetchData : function (){
    var self = this;

    //cargargar la data
    return $.getJSON('data.json').then(function (data) {
        self.jsonData = data;
        for (var name in data) {
          if (data.hasOwnProperty) {
            self.addNivel(name, data[name]);
          };
        };
    });
  },
  //function addNivel
  addNivel : function (name, nivel){
    this.niveles.add(new Escuela.Models.Nivel({
        name : name,
        maestro : nivel.maestro
      }));
  }
});