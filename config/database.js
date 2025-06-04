'use strict';
const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host : 'b9jcqyojldotphhzdsf4-mysql.services.clever-cloud.com',
    user : 'u6o0wiyeaxj1ytkv',
    password : 'Zsau1UbJL52RxuEsX91P',
    database: 'b9jcqyojldotphhzdsf4',
    port: 3306,
});


conexion.connect(function(err){
    if(err)
        throw err;
    console.log('Conexion a Base de Datos con EXITO');
});

module.exports = conexion;
