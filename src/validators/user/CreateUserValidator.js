const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    name: Joi.string()
      .alphanum()
      .required(),
    last_name: Joi.string()
      .alphanum()
      .required(),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{3,30}$/)
      .required()
      .min(6),
    confirm_password: Joi.ref('password'),
    phone_number: Joi.string()
      .required()
      .min(11),
    cep: Joi.string()
      .required(),
    number: Joi.string()
      .required()
  });
  try {
    return await schema.validateAsync(body);
  } catch (error) {
    return error;
  }
};
