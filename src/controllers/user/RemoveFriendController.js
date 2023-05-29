const RemoveFriendService = require('../../services/user/RemoveFriendService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { friendId } = req.body;
  try {
    const removeFriend = await RemoveFriendService(id, friendId);
    return res.status(200).json(removeFriend);
  } catch (error) {
    return res.status(400).json({
      error: 'Something wrong happened, try again!',
      message: error.message
    });
  }
};
