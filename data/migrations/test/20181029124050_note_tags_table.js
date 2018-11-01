exports.up = function(knex, Promise) {
	return knex.schema.createTable('note_tags', (tbl) => {
		tbl.increments();
		tbl.uuid('note_id')
			.notNullable()
			.references('_id')
			.inTable('notes');
		tbl.integer('tag_id')
			.unsigned()
			.notNullable()
			.references('id')
			.inTable('tags');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('note_tags');
};
