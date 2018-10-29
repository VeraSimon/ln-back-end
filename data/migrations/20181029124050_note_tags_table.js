exports.up = function(knex, Promise) {
	return knex.schema.createTable('note_tags', (tbl) => {
		tbl.increments();
		tbl.integer('note_id')
			.unsigned()
			.references('id')
			.inTable('notes');
		tbl.integer('tag_id')
			.unsigned()
			.references('id')
			.inTable('tags');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('note_tags');
};
