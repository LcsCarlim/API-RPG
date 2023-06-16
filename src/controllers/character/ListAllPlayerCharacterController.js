const ListAllPlayerCharacterService = require('../../services/character/ListAllPlayerCharacterService');

module.exports = async (req, res) => {
  const { id } = req.user;
  try {
    const characters = await ListAllPlayerCharacterService(id);
    res.status(200).json({
      success: true,
      characters
    });
  } catch (error) {
    res.status(400).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
