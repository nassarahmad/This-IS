// server.js
const http = require("http");
const app = require("./app");
const socket = require("./config/socket");

const server = http.createServer(app);

socket(server);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});