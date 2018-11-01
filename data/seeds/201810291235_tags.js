switch (process.env.NODE_ENV) {
	case 'production':
		exports.seed = async function(knex, Promise) {
			// THIS DOESN'T WORK WITH Sqlite3!
			await knex.schema.table('note_tags', function(tbl) {
				tbl.dropForeign('tag_id');
			});
			await knex('tags').truncate();
			await knex('tags').insert([{ tag: 'rowValue1' }, { tag: 'rowValue2' }, { tag: 'rowValue3' }]);
			await knex.schema.table('note_tags', function(tbl) {
				tbl.foreign('tag_id').references('tags.id');
			});
		};
	case 'development':
	default:
		exports.seed = function(knex, Promise) {
			return knex('tags')
				.truncate()
				.then(function() {
					return knex('tags').insert([{ tag: 'rowValue1' }, { tag: 'rowValue2' }, { tag: 'rowValue3' }]);
				});
		};
}
