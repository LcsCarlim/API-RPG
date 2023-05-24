const AddFriendService = require('../../services/user/AddFriendService');

module.exports = async (req, res) => {
  const { id } = req.user;
  const { friendId } = req.body;

  try {
    const user = await AddFriendService(id, friendId);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Cannot possible!' });
  }
};
