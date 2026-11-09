let conectar = require('../conexion/db');

class UsuarioController {

    ver = async (req, res) => {
        let [respuesta] = await conectar.query("SELECT * FROM usuarios");
        return res.json(respuesta);
    }

    actualizar = async (req, res) => {
        let { id } = req.params;
        let { nombre, apellido, direccion, telefono, correo } = req.body;
        let respuesta = await conectar.query(
            "UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, correo = ? WHERE id = ?",
            [nombre, apellido, direccion, telefono, correo, id]
        );
        console.log(respuesta);
        return res.json({
            mensaje: "usuario actualizado correctamente"
        });
    }

    eliminar = async (req, res) => {
        let { id } = req.params;
        let respuesta = await conectar.query("DELETE FROM usuarios WHERE id = ?", [id]);
        console.log(respuesta);
        return res.json({
            mensaje: "usuario eliminado correctamente"
        });
    }
}

module.exports = UsuarioController;