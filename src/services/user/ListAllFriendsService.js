const UserModel = require('../../database/model/UserModel');

module.exports = async (friends) => {
  try {
    const listFriends = await UserModel.findById(friends);
    return listFriends.friends;
  } catch (error) {
    throw new Error('Error listing friends');
  }
};
