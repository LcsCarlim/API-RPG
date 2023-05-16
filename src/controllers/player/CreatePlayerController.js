const CreatePlayerService = require('../../services/player/CreatePlayerService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { nickname, gender, combat_class, description } = req.body;
  const { filename } = req.file;
  try {
    const player = await CreatePlayerService({
      filename,
      id,
      nickname,
      gender,
      combat_class,
      description,
      user_id: id
    });
    return res.status(201).json(player);
  } catch (error) {
    return error;
  }
};
