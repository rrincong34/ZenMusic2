const express = require('express');
const app = express();
// Declaración de cors -> CORS lo dejaremos al final
const cors = require('cors');

// Declaración de la constante de las rutas de usuarios
const usuarioRutas = require('./rutas/usuarioRutas');
const cancionRutas = require('./rutas/cancionRutas');
const listaRutas = require('./rutas/listaRutas');

// -- MIDDLEWARES --
app.use(express.json());
app.use(cors());

// Consumo de las rutas
app.use('/api', usuarioRutas);
app.use('/api', cancionRutas);
app.use('/api', listaRutas);

// -- FIN MIDDLEWARES --

// Exportación del módulo
module.exports = app;
