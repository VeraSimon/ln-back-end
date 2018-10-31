exports.seed = function(knex, Promise) {
	return knex('tags')
		.raw('SET foreign_key_checks = 0')
		.truncate()
		.raw('SET foreign_key_checks = 1')
		.then(function() {
			return knex('tags').insert([{ tag: 'rowValue1' }, { tag: 'rowValue2' }, { tag: 'rowValue3' }]);
		});
};
