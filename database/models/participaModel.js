const { Model, DataTypes, Sequelize } = require('sequelize');

const PARTICIPA_TABLE = 'participa';

const ParticipaSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  idUser: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_user',
  },
  idJuego: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'id_juego',
  },
  puntosTotal: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'puntos_total',
    defaultValue: 0,
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
