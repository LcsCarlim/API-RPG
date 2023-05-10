const PlayerModel = require('../../database/model/PlayerModel');

module.exports = async (id) => {
  const findId = await PlayerModel.findById({ _id: id });
  if (!findId) throw new Error('Player not found!');

  return findId;
};
