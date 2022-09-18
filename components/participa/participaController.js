const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');

class Categoria_juegoController {
  constructor() {}

  async add(data) {
    const newParticipa = await models.Participa.create({
      ...data,
    });
    return newParticipa;
  }

  async delete(id) {
    const participa = await this.find(id);
    await participa.destroy();
    return id;
  }

  async find(id) {
    const participaFound = await models.Participa.findByPk(id);
    if (!participaFound) {
      throw boom.notFound('Participa not found');
    }
    return participaFound;
  }

  async getAll() {
    const participa = await models.Participa.findAll();
    return participa;
  }
}

module.exports = Categoria_juegoController;
