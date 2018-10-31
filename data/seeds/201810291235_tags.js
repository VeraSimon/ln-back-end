exports.seed = function(knex, Promise) {
	return knex('tags')
		.del()
		.then(function() {
			return knex('tags').insert([{ tag: 'rowValue1' }, { tag: 'rowValue2' }, { tag: 'rowValue3' }]);
		});
};
