const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    nickname: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .required()
      .max(10),
    gender: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .required(),
    combat_class: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .required(),
    description: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .required()
  });
  try {
    return await schema.validate(body);
  } catch (error) {
    return error;
  }
};
