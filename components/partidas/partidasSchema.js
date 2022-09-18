const validator = require('joi');

// List of atributes for user model
const id = validator.number().integer();
const juegoId = validator.number().integer();
const letra = validator.string().min(1);
const nroRonda = validator.number().integer();

const addPartidasSchema = validator.object({
  letra: letra.required(),
  nroRonda: nroRonda.required(),
  juegoId: juegoId.required(),
});

const editPartidasSchema = validator.object({
  letra: letra,
  nroRonda: nroRonda,
  juegoId: juegoId,
});

const getPartidasSchema = validator.object({
  id: id.required(),
});

module.exports = {
  addPartidasSchema,
  editPartidasSchema,
  getPartidasSchema,
};
