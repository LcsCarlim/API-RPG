const { Router } = require('express');
const routes = Router();
// const multer = require('multer');

const userAuth = require('../middlewares/CheckTokenMiddleware');
const playerMulterConfig = require('../config/PlayerMulterConfig');
const CreatePlayerController = require('../controllers/player/CreatePlayerController');
const FindPlayerByIdController = require('../controllers/player/FindPlayerByIdController');
const ListAllPlayersController = require('../controllers/player/ListAllPlayersController');

routes.post('/register',
  userAuth,
  playerMulterConfig.uploadImage,
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
