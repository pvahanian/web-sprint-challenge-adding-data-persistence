const express = require('express');
const CHANGE = require('ROUTER NAME LOCATION HERE');
const server = express();
server.use(express.json());
server.use('/api/'ENDPOINT NAME HERE', 'ROUTER NAME HERE');
module.exports = server;
