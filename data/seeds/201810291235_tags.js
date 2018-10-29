exports.seed = function(knex, Promise) {
	return knex('tags')
		.truncate()
		.then(function() {
			return knex('tags').insert([{ tag: 'rowValue1' }, { tag: 'rowValue2' }, { tag: 'rowValue3' }]);
		});
};
