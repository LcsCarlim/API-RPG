const UserModel = require('../../database/model/UserModel');

module.exports = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) { throw new Error('User not found'); }

  return user.friends;
};
