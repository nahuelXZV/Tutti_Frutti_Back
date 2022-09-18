const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./userModel');
const { PARTIDA_TABLE } = require('./partidaModel');
const { CATEGORIA_TABLE } = require('./categoriaModel');

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
  partidaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'partida_id',
    references: {
      model: PARTIDA_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  categoriaId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'categoria_id',
    references: {
      model: CATEGORIA_TABLE,
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

class Respuesta extends Model {
  static associate(models) {
    // associations can be defined here
    this.belongsTo(models.Categoria, {
      foreignKey: 'categoriaId',
      as: 'categoria',
    });
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
