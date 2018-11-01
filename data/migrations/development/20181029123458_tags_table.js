exports.up = function(knex, Promise) {
	return knex.schema.createTable('tags', (tbl) => {
		tbl.increments();
		tbl.string('tag', 255)
			.unique()
			.notNullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('tags');
};
