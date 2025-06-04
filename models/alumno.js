'use strict';

const conexion = require('../config/database');

let Alumno = function(alumno){
    this.numControl = alumno.num_control;
    this.nombre = alumno.nombre;
    this.primerAp = alumno.primer_ap;
    this.segundoAp = alumno.segundo_ap;
    this.fechaNac = alumno.fecha_nac;
    this.semestre = alumno.semestre;
    this.carrera = alumno.carrera; 
};


// ======= Logica para BD Relacional =====
// --- ALTAS ----
Alumno.create = function (alumno, result) {
    conexion.query("INSERT INTO alumnos SET ?", alumno, function (err, res) {
      if(err) {
        console.log("error: ", err);
        result(err, null);
      }
      else{
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
  };

// ----- BAJAS -----
Alumno.delete = function(nc, result){
    conexion.query("DELETE FROM alumnos WHERE numControl = ?", [nc], function(err, res){
        if(err){
            console.log('Error: ', err);
            result(err, null);
       }else{
           console.log(res);
           result(null, res);
       }
    });
};

//----- CAMBIOS 
Alumno.update = function(id, alumno, result){

    console.log("---------->", alumno);


    conexion.query("UPDATE alumnos SET nombre=?, primerAp=?, segundoAp=?, fechaNac=?, semestre=?, carrera=? WHERE numControl=?",
    [alumno.nombre, alumno.primerAp, alumno.segundoAp, alumno.fechaNac, 
        alumno.semestre, alumno.carrera, alumno.numControl], function(err, res){

                if(err){
                    console.log('Error: ', err);
                    result(null, err);
               }else{
                   console.log(res);
                   result(null, res);
               }
            });
};

//----- CONSULTAS -----
Alumno.findById = function(nc, result){
    conexion.query("SELECT * FROM alumnos WHERE numControl=?", nc, function(err,res){
        if(err){
            console.log('Error: ', err);
            result(null, err);
       }else{
           console.log(res);
           result(null, res);
       }
    });
};

Alumno.findAll = function(result){
    conexion.query("SELECT * FROM alumnos", function(err,res){
        if(err){
            console.log('Error: ', err);
            result(null, err);
       }else{
           console.log(res);
           result(null, res);
       }
    });
};

module.exports = Alumno;
