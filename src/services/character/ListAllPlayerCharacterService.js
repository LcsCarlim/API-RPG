const PlayerModel = require('../../database/model/PlayerModel');
const CharacterModel = require('../../database/model/CharacterModel');
const UserModel = require('../../database/model/UserModel');

module.exports = async (id) => {
  // eslint-disable-next-line no-unused-vars
  const user = await UserModel.findById(id);

  const player = await PlayerModel.find({ user_id: id });
  console.log(player);

  const character = await CharacterModel.find({ player_id: id });

  return character;
};
