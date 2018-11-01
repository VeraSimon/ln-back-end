exports.seed = function(knex, Promise) {
	return knex('tags')
		.then(function() {
			return knex.schema.table('note_tags', function(tbl) {
				tbl.dropForeign('tag_id');
			});
		})
		.truncate()
		.then(function() {
			return knex('tags').insert([{ tag: 'rowValue1' }, { tag: 'rowValue2' }, { tag: 'rowValue3' }]);
		})
		.then(function() {
			return knex.schema.table('note_tags', function(tbl) {
				tbl.foreign('tag_id').references('tags.id');
			});
		});
};
