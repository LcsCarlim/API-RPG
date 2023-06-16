const CreateCharacterService = require('../../services/character/CreateCharacterService');
const CreateCharacterValidator = require('../../validators/character/CreateCharacterValidator');

module.exports = async (req, res) => {
  const { card_name, type, description, player_id } = req.body;
  const { originalname, location } = req.file;
  try {
    console.log(req.file);
    const validator = await CreateCharacterValidator(req.body);
    if (validator.error) throw validator.error;

    console.log(location);
    const character = await CreateCharacterService({
      filename: originalname,
      card_name,
      type,
      description,
      player_id,
      location
    });
    return res.status(201).json(character);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
