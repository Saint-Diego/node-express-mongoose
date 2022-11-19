require('dotenv').config();
const mongoose = require('mongoose');
const { dbHost, dbName, dbPassword, dbUser } = require('./utils/config/index');

const DB_URL = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`;

mongoose.connect(DB_URL);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Database Connected');
});