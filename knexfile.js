require('dotenv').config();

// use against a 'local' copy of postgres
const localPg = {
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	user: process.env.DB_USER,
	password: process.env.DB_PASS
};

const pgConnection = process.env.DATABASE_URL || localPg;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/dev.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations/development'
		},
		seeds: {
			directory: './data/seeds/development'
		}
	},
	test: {
		client: 'pg',
		connection: localPg,
		useNullAsDefault: true,
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations',
			directory: './data/migrations/test'
		},
		seeds: {
			directory: './data/seeds/test'
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
			directory: './data/migrations/production'
		},
		seeds: {
			directory: './data/seeds/production'
		}
	}
};
