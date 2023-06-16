const CharacterModel = require('../../database/model/CharacterModel');

module.exports = async ({ player_id, filename, card_name, type, description, location }) => {
  const cardName = await CharacterModel.findOne({
    card_name
  });
  if (cardName) throw new Error('Card name already exists!');

  const character = await CharacterModel.create({
    player_id,
    filename,
    card_name,
    type,
    description,
    location
  });

  await character.save();

  return character;
};
