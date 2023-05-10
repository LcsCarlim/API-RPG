const FindCharacterByIdService = require('../../services/character/FindCharacterByIdService');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const findId = await FindCharacterByIdService(id);
    return res.status(200).json(findId);
  } catch (error) {
    return error;
  }
};
