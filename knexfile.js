require('dotenv').config();

// use against a 'local' copy of postgres
const localPg = {
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
};

const pgConnection = process.env.DATABASE_URL + '?ssl=true' || localPg;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/dev.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	},
	production: {
		client: 'pg',
		connection: pgConnection,
		useNullAsDefault: true,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './data/migrations'
		},
		seeds: {
			directory: './data/seeds'
		}
	}
};
