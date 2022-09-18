const validator = require('joi');

// List of atributes for user model
const userId = validator.number().integer();
const juegoId = validator.number().integer();
const id = validator.number().integer();

const addParticipaSchema = validator.object({
  userId: userId.required(),
  juegoId: juegoId.required(),
});

const getParticipaSchema = validator.object({
  id: id.required(),
});

module.exports = {
  addParticipaSchema,
  getParticipaSchema,
};
