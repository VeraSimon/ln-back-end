const { notesPayload } = require('../payloads');

exports.seed = function(knex, Promise) {
	return knex('notes')
		.del()
		.then(function() {
			return knex('notes').insert(notesPayload);
		});
};
