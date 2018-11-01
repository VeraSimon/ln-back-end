const { tagsPayload } = require('../payloads');

exports.seed = function(knex, Promise) {
	return knex('tags')
		.truncate()
		.then(function() {
			return knex('tags').insert(tagsPayload);
		});
};
