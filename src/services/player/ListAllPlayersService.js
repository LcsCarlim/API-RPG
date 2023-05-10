const PlayerModel = require('../../database/model/PlayerModel');

module.exports = async () => {
  const listPlayers = await PlayerModel.find();

  return listPlayers;
};
