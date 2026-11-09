let express = require('express');
let RolesController = require('../controllers/RolesController');
let router = express.Router();

let rol = new RolesController();

router.get('/ver', rol.ver);
router.post('/guardar', rol.guardar);
router.put('/actualizar/:id', rol.actualizar);
router.delete('/eliminar/:id', rol.eliminar);

module.exports = router;