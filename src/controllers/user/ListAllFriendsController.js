const ListAllFriendsService = require('../../services/user/ListAllFriendsService');

module.exports = async (req, res) => {
  const { friends } = req.user;

  try {
    const listFriends = await ListAllFriendsService({ friends });
    return res.status(200).json(listFriends);
  } catch (error) {
    return res.status(500).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
