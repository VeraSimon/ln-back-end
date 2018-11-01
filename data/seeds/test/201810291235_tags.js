const { tagsPayload } = require('../payloads');

exports.seed = async function(knex, Promise) {
	await knex.schema.table('note_tags', function(tbl) {
		tbl.dropForeign('tag_id');
	});
	await knex('tags').truncate();
	await knex('tags').insert(tagsPayload);
	await knex.schema.table('note_tags', function(tbl) {
		tbl.foreign('tag_id').references('tags.id');
	});
};
