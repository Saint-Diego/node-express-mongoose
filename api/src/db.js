require('dotenv').config();
const mongoose = require('mongoose');
const { dbHost, dbName, dbPort } = require('./utils/config/index');

//Connect to the MongoDB test database  
mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`);