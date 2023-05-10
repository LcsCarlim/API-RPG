const { Router } = require('express');
const routes = Router();
const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreatePlayerController = require('../controllers/player/CreatePlayerController');
const FindPlayerByIdController = require('../controllers/player/FindPlayerByIdController');
const ListAllPlayersController = require('../controllers/player/ListAllPlayersController');

routes.post('/register',
  userAuth,
  CreatePlayerController
);

routes.get('/find/:id',
  userAuth,
  FindPlayerByIdController
);

routes.get('/list',
  userAuth,
  ListAllPlayersController
);

module.exports = routes;
