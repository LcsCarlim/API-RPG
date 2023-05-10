const CharacterModel = require('../../database/model/CharacterModel');

module.exports = async () => {
  const listCharacters = await CharacterModel.find();

  return listCharacters;
};
