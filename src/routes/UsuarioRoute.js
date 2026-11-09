let express = require('express');
let UsuarioController = require('../controllers/UsuarioController');
let router = express.Router();

let usuario = new UsuarioController();

router.get('/ver', usuario.ver);
router.put('/actualizar/:id', usuario.actualizar);
router.delete('/eliminar/:id', usuario.eliminar);

module.exports = router;