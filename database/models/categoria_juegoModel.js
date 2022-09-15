const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORIA_JUEGO_TABLE = 'categoria_juego';

const Categoria_juegoSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  CategoriaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'categoria_id',
    references: {
      model: 'categoria',
      key: 'id',
    },
  },
  JuegoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'juego_id',
    references: {
      model: 'juego',
      key: 'id',
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Categoria_juego extends Model {
  static associate(models) {
    // associations can be defined here
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORIA_JUEGO_TABLE,
      modelName: 'Categoria_juego',
      timestamps: false,
    };
  }
}

module.exports = {
  CATEGORIA_JUEGO_TABLE,
  Categoria_juegoSchema,
  Categoria_juego,
};
