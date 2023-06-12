const CreatePlayerService = require('../../services/player/CreatePlayerService');
const CreatePlayerValidator = require('../../validators/player/CreatePlayerValidator');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { nickname, gender, combat_class, description } = req.body;
  const { originalname, location } = req.file;
  try {
    const validator = await CreatePlayerValidator(req.body);
    if (validator.error) throw validator.error;

    console.log(location);
    const player = await CreatePlayerService({
      filename: originalname,
      id,
      nickname,
      gender,
      combat_class,
      description,
      user_id: id
    });
    return res.status(201).json(player);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
