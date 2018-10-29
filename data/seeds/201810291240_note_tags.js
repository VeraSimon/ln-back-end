exports.seed = function(knex, Promise) {
	return knex('note_tags')
		.truncate()
		.then(function() {
			return knex('note_tags').insert([
				{ note_id: 1, tag_id: 2 },
				{ note_id: 3, tag_id: 3 },
				{ note_id: 2, tag_id: 1 },
				{ note_id: 2, tag_id: 3 }
			]);
		});
};
