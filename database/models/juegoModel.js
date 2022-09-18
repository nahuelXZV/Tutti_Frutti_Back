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
    // model Juego belongsToMany model Categoria_juego
    this.belongsToMany(models.Categoria, {
      as: 'categorias',
      through: models.Categoria_juego,
      foreignKey: 'juegoId',
      otherKey: 'categoriaId',
    });

    // model Juego belongsToMany model Partida
    this.belongsToMany(models.User, {
      as: 'participantes',
      through: models.Participa,
      foreignKey: 'juegoId',
      otherKey: 'userId',
    });

    // model Juego hasMany model Partida
    this.hasMany(models.Partida, {
      as: 'partidas',
      foreignKey: 'juegoId',
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
