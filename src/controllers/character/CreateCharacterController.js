const CreateCharacterService = require('../../services/character/CreateCharacterService');
const CreateCharacterValidator = require('../../validators/character/CreateCharacterValidator');

module.exports = async (req, res) => {
  const { card_name, type, description, player_id } = req.body;
  const { filename } = req.file;
  try {
    const validator = await CreateCharacterValidator(req.body);
    if (validator.error) throw validator.error;

    const character = await CreateCharacterService({
      filename,
      card_name,
      type,
      description,
      player_id
    });
    return res.status(201).json(character);
  } catch (error) {
    return error;
  }
};
