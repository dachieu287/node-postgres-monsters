const { Router } = require('express');
const monsters = require('./monsters');
const habitats = require('./habitats');
const lives = require('./lives');

const routers = Router();

routers.use('/monsters', monsters);
routers.use('/habitats', habitats);
routers.use('/lives', lives);

module.exports = routers;