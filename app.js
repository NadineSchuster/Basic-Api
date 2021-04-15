const express = require("express");
const server = express();
server.use(express.json());

let port = 3000;

server.listen(port, () =>
  console.log(`The server hast started on port ${port}`)
);

server.use("/", require("./routes.js"));
