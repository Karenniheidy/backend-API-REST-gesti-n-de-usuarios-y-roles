let conectar = require("../conexion/db");
let bcrypt = require("bcrypt");

class AccesoController {
    login = async (req, res) => {
        let { correo, password } = req.body;
        let [respuesta] = await conectar.query("SELECT password from usuarios where correo=? ", 
            [correo]
        );
        console.log(respuesta);
        let validar = await bcrypt.compare(password, respuesta[0].password);
        if (validar) {
            return res.json({
                mensaje: "logeo correcto"
            });
        } else {
            return res.json({
                mensaje: "contraseña incorrecta"
            });
        }
    }

    registrarse = async (req, res) => {
        let { nombre, apellido, direccion, telefono, correo, password } = req.body;
        let contrasena = await bcrypt.hash(password, 10);
        let respuesta = await conectar.query("INSERT INTO usuarios (nombre, apellido, direccion, telefono, correo, password) VALUES (?,?,?,?,?,?)",
            [nombre, apellido, direccion, telefono, correo, contrasena]
        );
        console.log(respuesta);
        return res.json({
            mensaje: "usuario registrado correctamente",
            usuario: {
                nombre: nombre,
                apellido: apellido   
            }
        });
    }
}

module.exports = AccesoController;