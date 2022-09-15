const { Model, DataTypes, Sequelize } = require('sequelize');

const JUEGO_TABLE = 'juego';

const JuegoSchema = {
  id: {
    allowNull: false, // not null
    autoIncrement: true, 
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  codigo: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
    defaultValue: Sequelize.UUIDV4,
  },
  maxParticipantes: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'max_participantes',
  },
  nroRondas: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'nro_rondas',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Juego extends Model {
  static associate(models) {
    // associations can be defined here
    models.Juego.belongsToMany(models.Categoria, {
      through: models.Categoria_Juego,
      as: 'categoria',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: JUEGO_TABLE,
      modelName: 'Juego',
      timestamps: false,
    };
  }
}

module.exports = { JUEGO_TABLE, JuegoSchema, Juego };
