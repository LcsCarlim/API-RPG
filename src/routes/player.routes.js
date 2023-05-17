const { Router } = require('express');
const routes = Router();
const multer = require('multer');

const userAuth = require('../middlewares/CheckTokenMiddleware');
const playerMulterConfigPlayer = require('../config/PlayerMulterConfig');
const CreatePlayerController = require('../controllers/player/CreatePlayerController');
const FindPlayerByIdController = require('../controllers/player/FindPlayerByIdController');
const ListAllPlayersController = require('../controllers/player/ListAllPlayersController');

routes.post('/register',
  multer(playerMulterConfigPlayer).single('filename'),
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
