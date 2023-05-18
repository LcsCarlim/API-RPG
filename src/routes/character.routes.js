const { Router } = require('express');
const routes = Router();
const multer = require('multer');

const documentMulterConfig = require('../config/CharacterMulterConfig');
const userAuth = require('../middlewares/CheckTokenMiddleware');
const CreateCharacterController = require('../controllers/character/CreateCharacterController');
const FindCharacterByIdController = require('../controllers/character/FindCharacterByIdController');
const ListAllCharactersController = require('../controllers/character/ListAllCharactersController');

routes.post('/register',
  documentMulterConfig.uploadImage,
  userAuth,
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

module.exports = routes;
