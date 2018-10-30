exports.up = function(knex, Promise) {
	return knex.schema.createTable('notes', (tbl) => {
		tbl.uuid('_id')
			.primary()
			.notNullable();
		tbl.string('title', 255).notNullable();
		tbl.string('textBody', 65535);
		tbl.integer('__v')
			.unsigned()
			.notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('notes');
};
