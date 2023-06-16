const Joi = require('joi');

module.exports = async body => {
  const schema = Joi.object({
    card_name: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .required(),
    type: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .required(),
    description: Joi.string()
      .regex(/^[a-zA-Z0-9\s]+$/)
      .required(),
    player_id: Joi.string()
      .required()
  });
  try {
    return await schema.validate(body);
  } catch (error) {
    return error;
  }
};
