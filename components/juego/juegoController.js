const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');
const { comparePassword, hashPassword } = require('../../libs/utils/bcrypt');

class JuegoController {
  constructor() {}

  async add(data) {
    const newJuego = await models.Juego.create({
      ...data,
    });
    return newJuego;
  }

  async edit(data, id) {
    const juego = await this.find(id);
    const juegoUpdated = await juego.update({
      ...data,
    });
    return juegoUpdated;
  }

  async delete(id) {
    const juego = await this.find(id);
    await juego.destroy();
    return id;
  }

  async find(id) {
    const juegoFound = await models.Juego.findByPk(id, {
      include: ['categorias', 'participantes'],
    });

    if (!juegoFound) {
      throw boom.notFound('Juego not found');
    }
    return juegoFound;
  }

  async getAll() {
    // buscar todos los juegos junto con sus categorias
    const juegos = await models.Juego.findAll({
      include: ['categorias', 'participantes'],
    });
    return juegos;
  }
}

module.exports = JuegoController;
