const usersRouter = require('../components/users/userRoute');
const authRouter = require('../components/auth/authRoute');
const juegoRouter = require('../components/juego/juegoRoute');
const categoriaRouter = require('../components/categoria/categoriaRoute');
const categoria_juegoRouter = require('../components/categoria_juego/categoria_juegoRouter');
const participa = require('../components/participa/participaRoute');

const express = require('express');

function mainRouter(app) {
  // Lista de rutas
  const router = express.Router(); //create a router
  app.use('/api', router); //use the router
  router.use('/users', usersRouter); //use the usersRouter
  router.use('/auth', authRouter); //use the authRouter
  router.use('/juego', juegoRouter); //use the juegoRouter
  router.use('/categoria', categoriaRouter); //use the categoriaRouter
  router.use('/categoria_juego', categoria_juegoRouter); //use the juego_categoriaRouter
  router.use('/participa', participa); //use the participaRouter
}

module.exports = mainRouter;
