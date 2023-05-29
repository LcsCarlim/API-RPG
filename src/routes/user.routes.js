const { Router } = require('express');
const routes = Router();

const userAuth = require('../middlewares/CheckTokenMiddleware');
const userLogout = require('../middlewares/LogoutMiddleware');
const CreateUserController = require('../controllers/user/CreateUserController');
const CreateUserAuthController = require('../controllers/user/CreateUserAuthController');
const ListAllUsersController = require('../controllers/user/ListAllUsersController');
const LogoutUserController = require('../controllers/user/LogoutUserController');
const FindUserByIdController = require('../controllers/user/FindUserByIdController');
const DeleteUserController = require('../controllers/user/DeleteUserController');
const AddFriendController = require('../controllers/user/AddFriendController');
const ListAllFriendsController = require('../controllers/user/ListAllFriendsController');
const RemoveFriendController = require('../controllers/user/RemoveFriendController');

routes.post('/register',
  CreateUserController
);

routes.post('/login',
  CreateUserAuthController
);

routes.get('/all',
  userAuth,
  ListAllUsersController
);

routes.post('/logout',
  userLogout,
  LogoutUserController
);

routes.get('/find/:id',
  userAuth,
  FindUserByIdController
);

routes.delete('/delete/:id',
  userAuth,
  DeleteUserController
);

routes.post('/friends',
  userAuth,
  AddFriendController
);

routes.get('/listfriends',
  userAuth,
  ListAllFriendsController
);

routes.post('/delete/friends',
  userAuth,
  RemoveFriendController
);

module.exports = routes;
