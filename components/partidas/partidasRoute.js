const {
  addPartidaSchema,
  editPartidaSchema,
  getPartidaSchema,
} = require('./partidasSchema');
const { checkRoles } = require('../../middleware/roleHandler');
const validatorHandler = require('../../middleware/validatorHandler');
const response = require('../../network/response');
const partidaController = require('./partidasController');
const express = require('express');
const passport = require('passport');

const router = express.Router();
const controller = new partidaController();

router.get(
  '/',
  // passport.authenticate('jwt', { session: false }), // Middleware de autenticación
  async (req, res, next) => {
    try {
      const users = await controller.getAll();
      response.success(req, res, users, 200);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  '/:id',
  // passport.authenticate('jwt', { session: false }), // Middleware de autenticación
  validatorHandler(getPartidaSchema, 'params'), // Middleware de validación
  async (req, res, next) => {
    const { id } = req.params; //used for getting the parameter
    await controller
      .find(id)
      .then((data) => {
        response.success(req, res, data, 200);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.post(
  '/',
  validatorHandler(addPartidaSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body; //used for getting the body
      const rest = await controller.add(body);
      response.success(req, res, rest, 201);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  validatorHandler(getPartidaSchema, 'params'),
  validatorHandler(editPartidaSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const body = req.body; //used for getting the body
    await controller
      .edit(body, id)
      .then((data) => {
        response.success(req, res, data, 201);
      })
      .catch((err) => {
        next(err);
      });
  }
);

router.delete(
  '/:id',
  // passport.authenticate('jwt', { session: false }),
  // checkRoles('admin'),
  validatorHandler(getPartidaSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    await controller
      .delete(id)
      .then((data) => {
        response.success(req, res, data, 201);
      })
      .catch((err) => {
        next(err);
      });
  }
);

module.exports = router;
