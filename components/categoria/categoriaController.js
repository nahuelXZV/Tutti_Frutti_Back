const { models } = require('../../libs/sequelize');
const boom = require('@hapi/boom');

class CategoriaController {
  constructor() {}

  async add(data) {
    const newCategoria = await models.Categoria.create({
      ...data,
    });
    return newCategoria;
  }

  async edit(data, id) {
    const categoria = await this.find(id);
    const categoriaUpdated = await categoria.update({
      ...data,
    });
    return categoriaUpdated;
  }

  async delete(id) {
    const categoria = await this.find(id);
    await categoria.destroy();
    return id;
  }

  async find(id) {
    const categoriaFound = await models.Categoria.findByPk(id);
    if (!categoriaFound) {
      throw boom.notFound('Categoria not found');
    }
    return categoriaFound;
  }

  async getAll() {
    const categorias = await models.Categoria.findAll();
    return categorias;
  }
}

module.exports = CategoriaController;
