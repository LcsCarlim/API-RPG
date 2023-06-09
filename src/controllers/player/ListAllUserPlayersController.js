const ListAllUserPlayersService = require('../../services/player/ListAllUserPlayersService');

module.exports = async (req, res) => {
  const { id } = req.user;
  try {
    const user = await ListAllUserPlayersService(id);
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
