const CharacterModel = require('../../database/model/CharacterModel');

module.exports = async (id) => {
  const findId = await CharacterModel.findById({ _id: id });
  if (!findId) throw new Error('Character not found!');

  return findId;
};
