require('dotenv').config()

module.exports = {
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3001,
  dbHost: process.env.DB_HOST || 'cluster0.yvshasw.mongodb.net',
  dbUser: process.env.DB_USER || 'saint-diego',
  dbPassword: process.env.DB_PASSWORD || 'diego89',
  dbName: process.env.DB_NAME || 'test',
}