const usersRouter = require('../components/users/userRoute');
const authRouter = require('../components/auth/authRoute');
const juegoRouter = require('../components/juego/juegoRoute');
const express = require('express');

function mainRouter(app) {
  // Lista de rutas
  const router = express.Router(); //create a router
  app.use('/api', router); //use the router
  router.use('/users', usersRouter); //use the usersRouter
  router.use('/auth', authRouter); //use the authRouter
  router.use('/juego', juegoRouter); //use the juegoRouter
}

module.exports = mainRouter;
