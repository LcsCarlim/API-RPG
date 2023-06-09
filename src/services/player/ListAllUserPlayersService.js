const UserModel = require('../../database/model/UserModel');
const PlayerModel = require('../../database/model/PlayerModel');

module.exports = async (id) => {
  const user = await UserModel.findById(id);

  const players = await PlayerModel.find({ user_id: id });

  return players;
};
