const FindPlayerByIdService = require('../../services/player/FindPlayerByIdService');

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const findId = await FindPlayerByIdService(id);
    return res.status(200).json(findId);
  } catch (error) {
    return error;
  }
};
