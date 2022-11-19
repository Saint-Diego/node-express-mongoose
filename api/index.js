const server = require('./src/app.js');
const { port } = require("./src/utils/config/index");

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});