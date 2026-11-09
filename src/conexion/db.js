let mysql = require('mysql2')

let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Karen0420",
    database: "db_acceso",
    port: 3306
});

conectar.connect((error)=>{
    if(error){
        console.log('error db')
    }
    else{
        console.log('conexión exitosa')
    }
});

module.exports = conectar.promise(); 