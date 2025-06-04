'use strict';
const mysql = require('mysql');

const conexion = mysql.createConnection({
    host : 'turntable.proxy.rlwy.net',
    user : 'root',
    password : 'eMiADMROyKQOPkvlRCdRLAwetbyTVbnd',
    database: 'railway',
    port: 34376,
});


conexion.connect(function(err){
    if(err)
        throw err;
    console.log('Conexion a Base de Datos con EXITO');
});

module.exports = conexion;
