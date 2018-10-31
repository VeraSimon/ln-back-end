exports.seed = function(knex, Promise) {
	return knex('note_tags')
		.raw('SET foreign_key_checks = 0')
		.truncate()
		.raw('SET foreign_key_checks = 1')
		.then(function() {
			return knex('note_tags').insert([
				{ note_id: 'cc2cc3e9-5e20-5fbe-83e8-2ff155a7b993', tag_id: 2 },
				{ note_id: '4b947927-a164-5657-aac6-47b4d3697d03', tag_id: 3 },
				{ note_id: 'b573109c-02ed-5389-b402-9d5c06863183', tag_id: 1 },
				{ note_id: 'b573109c-02ed-5389-b402-9d5c06863183', tag_id: 3 }
			]);
		});
};
