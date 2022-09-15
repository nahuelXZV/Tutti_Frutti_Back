const { Model, DataTypes, Sequelize } = require('sequelize');

const PARTIDA_TABLE = 'partida';

const PartidaSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  letra: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nroRonda: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'nro_ronda',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Partida extends Model {
  static associate(models) {
    // associations can be defined here
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PARTIDA_TABLE,
      modelName: 'Partida',
      timestamps: false,
    };
  }
}

module.exports = { PARTIDA_TABLE, PartidaSchema, Partida };
