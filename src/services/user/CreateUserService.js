const UserModel = require('../../database/model/UserModel');
const GetCepGateway = require('../../gateway/GetCepGateway');

module.exports = async ({ name, last_name, email, password, confirm_password, phone_number, cep, number, role }) => {
  const emailExists = await UserModel.findOne({
    email
  });
  if (emailExists) throw new Error('Email already exists!');

  const phoneExists = await UserModel.findOne({
    phone_number
  });
  if (phoneExists) throw new Error('Phone number already exists!');

  const response = await GetCepGateway(cep);

  const createUser = await UserModel.create({
    name,
    last_name,
    email,
    password,
    confirm_password,
    phone_number,
    cep: response.data.logradouro,
    number,
    role
  });

  return createUser;
};
