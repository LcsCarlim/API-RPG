const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    nickname: Joi.string()
      .alphanum()
      .requried(),
    gender: Joi.string()
      .alphanum()
      .required(),
    combat_class: Joi.string()
      .alphanum()
      .required(),
    description: Joi.string()
      .alphanum()
      .requried()
  });
  try {
    return await schema.validate(body);
  } catch (error) {
    return error;
  }
};
