const { noteTagsPayload } = require('../payloads');

exports.seed = function(knex, Promise) {
	return knex('note_tags')
		.truncate()
		.then(function() {
			return knex('note_tags').insert(noteTagsPayload);
		});
};
