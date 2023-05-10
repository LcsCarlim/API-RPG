const UserModel = require('../../database/model/UserModel');
const jwt = require('jsonwebtoken');
const { compare } = require('bcryptjs');

module.exports = async ({ email, password }) => {
  const user = await UserModel.findOne({
    email
  }).select('+password');
  if (!user) throw new Error('Email not exists!');

  const incorrectPassword = await compare(password, user.password);

  if (!incorrectPassword) throw new Error('Incorrect password!');

  const secret = process.env.ACCESS_TOKEN;

  const token = jwt.sign({
    id: user._id,
    role: user.role
  },
  secret
  );

  return token;
};
