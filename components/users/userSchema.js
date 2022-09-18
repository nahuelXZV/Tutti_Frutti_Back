const validator = require('joi');

// List of atributes for user model
const id = validator.number().integer();
const email = validator.string().email();
const password = validator.string().min(7);
const role = validator.string().min(5);
const userName = validator.string().min(3);
const imagen = validator.string().min(3);

const addUserSchema = validator.object({
  email: email.required(),
  userName: userName.required(),
  password: password.required(),
  role: role.required(),
  imagen: imagen,
});

const editUserSchema = validator.object({
  email: email,
  password: password,
  role: role,
  userName: userName,
  imagen: imagen,
});

const getUserSchema = validator.object({
  id: id.required(),
});

module.exports = {
  addUserSchema,
  editUserSchema,
  getUserSchema,
};
