const validator = require('joi');

// List of atributes for user model
const id = validator.number().integer();
const nombre = validator.string();

const addCategoriaSchema = validator.object({
  nombre: nombre.required(),
});

const editCategoriaSchema = validator.object({
  nombre: nombre,
});

const getCategoriaSchema = validator.object({
  id: id.required(),
});

module.exports = {
  addCategoriaSchema,
  editCategoriaSchema,
  getCategoriaSchema,
};
