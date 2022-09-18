'use strict';

const { USER_TABLE, UserSchema } = require('../models/userModel');
const { CATEGORIA_TABLE, CategoriaSchema } = require('../models/categoriaModel');
const { JUEGO_TABLE, JuegoSchema } = require('../models/juegoModel');
const { PARTICIPA_TABLE, ParticipaSchema } = require('../models/participaModel');
const { PARTIDA_TABLE, PartidaSchema } = require('../models/partidaModel');
const { RESPUESTA_TABLE, RespuestaSchema } = require('../models/respuestaModel');
const { CATEGORIA_JUEGO_TABLE, Categoria_juegoSchema } = require('../models/categoria_juegoModel');



module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORIA_TABLE, CategoriaSchema);
    await queryInterface.createTable(JUEGO_TABLE, JuegoSchema);
    await queryInterface.createTable(PARTIDA_TABLE, PartidaSchema);
    await queryInterface.createTable(PARTICIPA_TABLE, ParticipaSchema);
    await queryInterface.createTable(RESPUESTA_TABLE, RespuestaSchema);
    await queryInterface.createTable(CATEGORIA_JUEGO_TABLE, Categoria_juegoSchema);
    // Add others migrations here
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(RESPUESTA_TABLE);
    await queryInterface.dropTable(CATEGORIA_JUEGO_TABLE);
    await queryInterface.dropTable(PARTIDA_TABLE);
    await queryInterface.dropTable(PARTICIPA_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORIA_TABLE);
    await queryInterface.dropTable(JUEGO_TABLE);
    // Add others migrations here
  }
};
