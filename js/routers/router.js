var Backbone      = require('backbone'),
    Niveles       = require('../collections/niveles'),
    Alumnos       = require('../collections/alumnos'),
    Nivel         = require('../models/nivel'),
    Alumno        = require('../models/alumno'),
    ListView      = require('../views/list'),
    DetailView    = require('../views/detail'),
    NivelesView   = require('../views/niveles'),
    $             = require('jquery');

module.exports = Backbone.Router.extend({
  routes:{
    "" : "index", //solo me mostrara los niveles es decir  primaria y secundaria
    "nivel/:name" : "nivel"
  },

  initialize : function (){
    this.current = {};
    this.jsonData = {};
    this.niveles = new Niveles();
    this.alumnos = new Alumnos();
    this.alumnolista = new ListView({collection: this.alumnos});
    this.nivellista = new NivelesView({collection: this.niveles});
    this.details = new DetailView({model: new Alumno()});

    Backbone.history.start();
  },
  //function index
  index : function (){
    this.fetchData();
  },
  //function nivel
  nivel : function (name){
    if (Object.keys(this.jsonData).length === 0) {
      var self = this;

      this.fetchData().done(function () {
        self.addAlumnos(name);
      });

    } else {
      this.addAlumnos(name);
    }
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
  //function addAlumnos
  addAlumnos : function (name){
    this.alumnos.reset();

    this.current.nivel = this.jsonData[name];
    this.current.nivel.alumnos.forEach(this.addAlumno, this);

  },
  //function addAlumno
  addAlumno : function (alumno){
    var nivel = this.current.nivel;

    this.alumnos.add(new Alumno({
      nivel_name : nivel.name,
      nivel_maestro : nivel.maestro,
      name : alumno.name,
      grupo : alumno.grupo,
      turno : alumno.turno,
      nivel : alumno.nivel,
      foto : alumno.foto
    }));
  },
  //function addNivel
  addNivel : function (name, nivel){
    this.niveles.add(new Nivel({
        name : name,
        maestro : nivel.maestro
      }));
  }
});