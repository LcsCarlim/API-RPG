const PlayerModel = require('../../database/model/PlayerModel');

module.exports = async ({ user_id, filename, nickname, gender, combat_class, description, location }) => {
  const nameExists = await PlayerModel.findOne({
    nickname
  });
  if (nameExists) throw new Error('Nickname already exists!');

  const player = await PlayerModel.create({
    nickname,
    filename,
    gender,
    combat_class,
    description,
    user_id,
    location
  });

  return player;
};
