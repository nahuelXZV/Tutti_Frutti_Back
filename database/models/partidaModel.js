const { Model, DataTypes, Sequelize } = require('sequelize');
const { JUEGO_TABLE } = require('./juegoModel');

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

class Partida extends Model {
  static associate(models) {
    // Partida belongs to Juego
    this.belongsTo(models.Juego, {
      as: 'juego',
      foreignKey: 'juegoId',
    });

    // Partida has many Respuestas
    this.belongsToMany(models.User, {
      as: 'respuestas',
      through: models.Respuesta,
      foreignKey: 'partidaId',
      otherKey: 'userId',
    });
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
