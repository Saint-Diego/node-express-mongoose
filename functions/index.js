const functions = require("firebase-functions");
const server = require('./src/app.js');
const { port } = require("./src/utils/config/index");

// server.listen(port, () => {
//   console.log(`Server listening at ${port}`);
// });

exports.app = functions.https.onRequest(server);