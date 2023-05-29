const UserModel = require('../../database/model/UserModel');

module.exports = async (id, friendId) => {
  const [user, friendIsValid] = await Promise.all([
    UserModel.findById(friendId)
  ]);

  if (!friendIsValid) throw new Error('Friend not exists');

  const friendExists = user.friends.find((friend) => friend.toString() === friendId.toString());

  if (friendExists) throw new Error('Friend not exists!');

  const removeFriend = await UserModel.findByIdAndUpdate(id, { $pull: { friends: friendId } }, { new: true });

  return removeFriend;
};
