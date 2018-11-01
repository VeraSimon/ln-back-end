const { notesPayload } = require('../payloads');

exports.seed = async function(knex, Promise) {
	await knex.schema.table('note_tags', function(tbl) {
		tbl.dropForeign('note_id');
	});
	await knex('notes').del();
	await knex('notes').insert(notesPayload);
	await knex.schema.table('note_tags', function(tbl) {
		tbl.foreign('note_id').references('notes._id');
	});
};
