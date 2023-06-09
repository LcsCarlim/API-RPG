const FindAllPlayersFromUserService = require('../../services/player/FindAllPlayersFromUserService');

module.exports = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await FindAllPlayersFromUserService(id);
    res.status(200).json({
      success: true,
      user
    });
  } catch (error) {
    res.status(400).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
