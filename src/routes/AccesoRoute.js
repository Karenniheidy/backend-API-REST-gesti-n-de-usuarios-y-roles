let express = require('express');
let AccesoController = require('../controllers/AccesoController');
let router = express.Router();

let acceso = new AccesoController();

router.post('/register', acceso.registrarse);
router.post('/login', acceso.login);

module.exports = router;