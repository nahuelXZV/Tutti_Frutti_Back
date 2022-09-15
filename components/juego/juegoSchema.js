const validator = require('joi');

// List of atributes for user model
const id = validator.number().integer();
const maxParticipantes = validator.number().integer();
const nroRondas = validator.number().integer();

const addJuegoSchema = validator.object({
  maxParticipantes: maxParticipantes.required(),
  nroRondas: nroRondas.required(),
});

const editJuegoSchema = validator.object({
  maxParticipantes: maxParticipantes,
  nroRondas: nroRondas,
});

const getJuegoSchema = validator.object({
  id: id.required(),
});

module.exports = {
  addJuegoSchema,
  editJuegoSchema,
  getJuegoSchema,
};
