const { User, UserSchema } = require('./userModel');
const { Categoria, CategoriaSchema } = require('./categoriaModel');
const { Juego, JuegoSchema } = require('./juegoModel');
const { Participa, ParticipaSchema } = require('./participaModel');
const { Partida, PartidaSchema } = require('./partidaModel');
const { Respuesta, RespuestaSchema } = require('./respuestaModel');
const {
  Categoria_juego,
  Categoria_juegoSchema,
} = require('./categoria_juegoModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Juego.init(JuegoSchema, Juego.config(sequelize));
  Categoria.init(CategoriaSchema, Categoria.config(sequelize));
  Partida.init(PartidaSchema, Partida.config(sequelize));
  Participa.init(ParticipaSchema, Participa.config(sequelize));
  Respuesta.init(RespuestaSchema, Respuesta.config(sequelize));
  Categoria_juego.init(
    Categoria_juegoSchema,
    Categoria_juego.config(sequelize)
  );

  // Associations
  User.associate(sequelize.models);
  Juego.associate(sequelize.models);
  Categoria.associate(sequelize.models);
  Partida.associate(sequelize.models);
  Respuesta.associate(sequelize.models);
  Participa.associate(sequelize.models);
  Categoria_juego.associate(sequelize.models);
}

module.exports = setupModels;
