const http = require('http');

const routeFn = require('./routes.js');

const server = http.createServer(routeFn);

server.listen(5000) 