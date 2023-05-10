const CreateUserService = require('../../services/user/CreateUserService');
const CreateUserValidator = require('../../validators/user/CreateUserValidator');

module.exports = async (req, res) => {
  const { name, last_name, email, password, confirm_password, phone_number, cep, number, role } = req.body;
  try {
    const validator = await CreateUserValidator(req.body);
    if (validator.error) throw validator.error;

    const createUser = await CreateUserService({
      name,
      last_name,
      email,
      password,
      confirm_password,
      phone_number,
      cep,
      number,
      role
    });
    return res.status(201).json(createUser);
  } catch (error) {
    return res.status(400).json({
      error: 'Registration failed!',
      message: error.message
    });
  }
};
