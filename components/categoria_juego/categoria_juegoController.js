const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');

class Categoria_juegoController {
  constructor() {}

  async add(data) {
    const newCategoria_juego = await models.Categoria_juego.create({
      ...data,
    });
    return newCategoria_juego;
  }

  async delete(id) {
    const categoria_juego = await this.find(id);
    await categoria_juego.destroy();
    return id;
  }

  async find(id) {
    const categoria_juegoFound = await models.Categoria_juego.findByPk(id);
    if (!categoria_juegoFound) {
      throw boom.notFound('Categoria_juego not found');
    }
    return categoria_juegoFound;
  }

  async getAll() {
    const categorias = await models.Categoria_juego.findAll();
    return categorias;
  }
}

module.exports = Categoria_juegoController;
