let express = require('express');
let cors = require('cors');
let routerAcceso = require('./src/routes/AccesoRoute');
let routerRoles = require('./src/routes/RolesRoute');
let routerUsuario = require('./src/routes/UsuarioRoute');

let PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Montamos las rutas
app.use('/api', routerAcceso);
app.use('/api/roles', routerRoles);
app.use('/api/usuarios', routerUsuario);

app.listen(PORT, () => {
    console.log('Servidor ejecutándose en puerto ' + PORT);
});