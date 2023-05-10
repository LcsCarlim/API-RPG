const { Router } = require('express');
const routes = Router();

const userRoutes = require('../routes/user.routes');
const playerRoutes = require('../routes/player.routes');
const characterRoutes = require('../routes/character.routes');

routes.use('/users',
  userRoutes
);

routes.use('/players',
  playerRoutes
);

routes.use('/characters',
  characterRoutes
);

module.exports = routes;
