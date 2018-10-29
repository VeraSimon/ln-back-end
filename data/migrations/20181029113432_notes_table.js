exports.up = function(knex, Promise) {
	return knex.schema.createTable('notes', (tbl) => {
		tbl.increments();
		tbl.string('title', 255).notNullable();
		tbl.string('text_body', 65535);
		tbl.uuid('_id')
			.unique()
			.notNullable();
		tbl.integer('__v').defaultTo(0);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('notes');
};
