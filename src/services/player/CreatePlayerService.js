const PlayerModel = require('../../database/model/PlayerModel');

module.exports = async ({ user_id, filename, nickname, gender, combat_class, description }) => {
  const player = await PlayerModel.create({
    nickname,
    filename,
    gender,
    combat_class,
    description,
    user_id
  });

  await player.save();

  return player;
};
