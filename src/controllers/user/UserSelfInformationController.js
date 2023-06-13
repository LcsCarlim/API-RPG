const UserSelfInformationService = require('../../services/user/UserSelfInformationService');

module.exports = async (req, res) => {
  try {
    const { id } = req.user;
    const userSelf = await UserSelfInformationService(id);

    return res.status(200).json(userSelf);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again',
      message: error.message
    });
  }
};
