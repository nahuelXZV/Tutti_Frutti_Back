const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIA_TABLE = 'categoria';

const CategoriaSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Categoria extends Model {
  static associate(models) {
    // associations can be defined here
    models.Categoria.belongsToMany(models.Juego, {
      through: models.Categoria_Juego,
      as: 'juego',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIA_TABLE,
      modelName: 'Categoria',
      timestamps: false,
    };
  }
}

module.exports = { CATEGORIA_TABLE, CategoriaSchema, Categoria };
