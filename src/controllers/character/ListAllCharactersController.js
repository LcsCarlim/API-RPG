const ListAllCharactersService = require('../../services/character/ListAllCharactersService');

module.exports = async (req, res) => {
  try {
    const listCharacters = await ListAllCharactersService();
    return res.status(200).json(listCharacters);
  } catch (error) {
    return error;
  }
};
