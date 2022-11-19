const express = require('express'); 
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routesUser = require('./routes/routesUser');
const routesPet = require('./routes/routesPet');
const errorHandler = require('./utils/middleware/errorHandler');
const setHeader = require('./utils/middleware/setHeader');  

require('./db.js');

const server = express();
  
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeader);

server.use('/api/user', routesUser);
server.use('/api/pet', routesPet);

server.use(errorHandler); 

module.exports = server;    