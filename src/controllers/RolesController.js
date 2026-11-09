let conectar = require('../conexion/db');

class RolesController {

    ver = async (req, res) => {
        let [respuesta] = await conectar.query("SELECT * FROM roles");
        return res.json(respuesta);
    }

    guardar = async (req, res) => {
        let { nombre, descripcion, id_usuarios } = req.body;
        let respuesta = await conectar.query(
            "INSERT INTO roles (nombre, descripcion, id_usuarios) VALUES (?, ?, ?)",
            [nombre, descripcion, id_usuarios]
        );
        console.log(respuesta);
        return res.json({
            mensaje: "rol registrado correctamente"
        });
    }

    actualizar = async (req, res) => {
        let { id } = req.params;
        let { nombre, descripcion, id_usuarios } = req.body;
        let respuesta = await conectar.query(
            "UPDATE roles SET nombre = ?, descripcion = ?, id_usuarios = ? WHERE id = ?",
            [nombre, descripcion, id_usuarios, id]
        );
        console.log(respuesta);
        return res.json({
            mensaje: "rol actualizado correctamente"
        });
    }

    eliminar = async (req, res) => {
        let { id } = req.params;
        let respuesta = await conectar.query("DELETE FROM roles WHERE id = ?", [id]);
        console.log(respuesta);
        return res.json({
            mensaje: "rol eliminado correctamente"
        });
    }
}

module.exports = RolesController;