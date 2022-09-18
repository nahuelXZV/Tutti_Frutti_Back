const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');

class JuegoController {
  constructor() {}

  async add(data) {
    const newPartida = await models.Partida.create({
      ...data,
    });
    return newPartida;
  }

  async edit(data, id) {
    const partida = await this.find(id);
    const partidaUpdated = await partida.update({
      ...data,
    });
    return partidaUpdated;
  }

  async delete(id) {
    const partida = await this.find(id);
    await partida.destroy();
    return id;
  }

  async find(id) {
    const partidaFound = await models.Partida.findByPk(id);

    if (!partidaFound) {
      throw boom.notFound('Partida not found');
    }
    return partidaFound;
  }

  async getAll() {
    // buscar todos los juegos junto con sus categorias
    const partida = await models.Partida.findAll();
    return partida;
  }
}

module.exports = JuegoController;
