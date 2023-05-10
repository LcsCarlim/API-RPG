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

module.exports = routes;
