const validator = require('joi');

// List of atributes for user model
const categoriaId = validator.number().integer();
const juegoId = validator.number().integer();
const id = validator.number().integer();

const addCategoria_juegoSchema = validator.object({
  categoriaId: categoriaId.required(),
  juegoId: juegoId.required(),
});

const getCategoria_juegoSchema = validator.object({
  id: id.required(),
});

module.exports = {
  addCategoria_juegoSchema,
  getCategoria_juegoSchema,
};
