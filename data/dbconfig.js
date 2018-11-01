const knex = require('knex');
require('dotenv').config();

const dbEngine = process.env.DB.toLowerCase() || 'development';
const knexConfig = require('../knexfile')[dbEngine];

module.exports = knex(knexConfig);
