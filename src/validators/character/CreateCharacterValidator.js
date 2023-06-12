const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    card_name: Joi.string()
      .alphanum()
      .required(),
    type: Joi.string()
      .alphanum()
      .required(),
    description: Joi.string()
      .alphanum()
      .required()
  });
  try {
    return await schema.validate(body);
  } catch (error) {
    return error;
  }
};
