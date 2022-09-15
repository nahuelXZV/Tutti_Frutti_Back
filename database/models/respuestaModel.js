const { Model, DataTypes, Sequelize } = require('sequelize');

const RESPUESTA_TABLE = 'respuesta';

const RespuestaSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  respuesta: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  esAceptada: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'es_aceptada',
  },
  puntos: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Respuesta extends Model {
  static associate(models) {
    // associations can be defined here
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESPUESTA_TABLE,
      modelName: 'Respuesta',
      timestamps: false,
    };
  }
}

module.exports = { RESPUESTA_TABLE, RespuestaSchema, Respuesta };
