const ListAllFriendsService = require('../../services/user/ListAllFriendsService');

module.exports = async (req, res) => {
  const { id } = req.user;

  try {
    const listFriends = await ListAllFriendsService(id);
    return res.status(200).json(listFriends);
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
