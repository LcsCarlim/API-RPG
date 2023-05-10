const ListAllPlayersService = require('../../services/player/ListAllPlayersService');

module.exports = async (req, res) => {
  try {
    const listPlayers = await ListAllPlayersService();
    return res.status(200).json(listPlayers);
  } catch (error) {
    return error;
  }
};
