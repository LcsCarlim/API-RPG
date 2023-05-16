const CreateCharacterService = require('../../services/character/CreateCharacterService');

module.exports = async (req, res) => {
  const { card_name, type, description, player_id } = req.body;
  const { player_image } = req.file;
  try {
    const character = await CreateCharacterService({
      player_image,
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
