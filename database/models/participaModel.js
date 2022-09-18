const { Model, DataTypes, Sequelize } = require('sequelize');
const { JUEGO_TABLE } = require('./juegoModel');
const { USER_TABLE } = require('./userModel');

const PARTICIPA_TABLE = 'participa';

const ParticipaSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  puntosTotal: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'puntos_total',
    defaultValue: 0,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  juegoId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'juego_id',
    references: {
      model: JUEGO_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Participa extends Model {
  static associate(models) {
    // associations can be defined here
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PARTICIPA_TABLE,
      modelName: 'Participa',
      timestamps: false,
    };
  }
}

module.exports = { PARTICIPA_TABLE, ParticipaSchema, Participa };
