const UserModel = require('../../database/model/UserModel');

module.exports = async (id, friendId) => {
  const user = await UserModel.findByIdAndUpdate(id, { $push: { friends: friendId } }, { new: true });

  return user;
};
