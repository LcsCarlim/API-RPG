const { Router } = require('express');
const routes = Router();

const documentMulterConfig = require('../config/CharacterMulterConfig');
const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreateCharacterController = require('../controllers/character/CreateCharacterController');
const FindCharacterByIdController = require('../controllers/character/FindCharacterByIdController');
const ListAllCharactersController = require('../controllers/character/ListAllCharactersController');
const ListAllPlayerCharacterController = require('../controllers/character/ListAllPlayerCharacterController');

routes.post('/register',
  userAuth,
  documentMulterConfig.uploadImage,
  CreateCharacterController
);

routes.get('/find/:id',
  userAuth,
  FindCharacterByIdController
);

routes.get('/list',
  userAuth,
  ListAllCharactersController
);

routes.get('/playercharacter',
  userAuth,
  ListAllPlayerCharacterController
);

module.exports = routes;
