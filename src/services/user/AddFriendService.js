const UserModel = require('../../database/model/UserModel');

module.exports = async (id, friendId) => {
  // Definindo que o usuário não pode adicionar ele mesmo
  if (friendId === id) throw new Error('Cannot possible!');

  // Pegando user e o amigo ao mesmo tempo
  const [user, friendIsValid] = await Promise.all([
    UserModel.findById(id),
    UserModel.findById(friendId)
  ]);

  // Verificando se o amigo é valido (existe um usuário com esse ID)
  if (!friendIsValid) throw new Error('Friend not exists');

  // Verificando se o amigo pretendido já existe na lista de amigo
  const friendExists = user.friends.find((friend) => friend.toString() === friendId.toString());

  // Traz o erro se o usuário for amigo
  if (friendExists) throw new Error('User already has friend');

  // Se não der erro, ele adiciona
  const addFriend = await UserModel.findByIdAndUpdate(id, { $push: { friends: friendId } }, { new: true });

  return addFriend;
};
