const CharacterModel = require('../../database/model/CharacterModel');

module.exports = async ({ player_id, filename, card_name, type, description }) => {
  const character = await CharacterModel.create({
    player_id,
    filename,
    card_name,
    type,
    description
  });

  await character.save();

  return character;
};
