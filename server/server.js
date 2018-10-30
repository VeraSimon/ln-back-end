require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const notesRoutes = require('../api/notesroutes');
const { errorHandler } = require('../errorHandler/handlers');

const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/note', notesRoutes);

server.use((req, res, next) => {
	next(['h404', `The requested path '${req.path}' does not exist.`]);
});

server.use(errorHandler);

module.exports = server;
