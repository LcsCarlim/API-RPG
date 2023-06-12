const UserModel = require('../../database/model/UserModel');
const PlayerModel = require('../../database/model/PlayerModel');

module.exports = async (id) => {
  // eslint-disable-next-line no-unused-vars
  const user = await UserModel.findById(id);

  const players = await PlayerModel.find({ user_id: id });

  return players;
};
