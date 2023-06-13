const UserModel = require('../../database/model/UserModel');

module.exports = async (id) => {
  const userSelf = await UserModel.findOne({ _id: id });

  return userSelf;
};
