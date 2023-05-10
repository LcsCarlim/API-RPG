const CreateUserAuthService = require('../../services/user/CreateUserAuthService');
const CreateUserAuthValidator = require('../../validators/user/CreateUserAuthValidator');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validator = await CreateUserAuthValidator(req.body);
    if (validator.error) throw validator.error;

    const userAuth = await CreateUserAuthService({ email, password });
    return res.status(200).json({
      message: 'Login successful!',
      userAuth
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Login failed!',
      message: error.message
    });
  }
};
