exports.seed = function(knex, Promise) {
	return knex('notes')
		.raw('SET foreign_key_checks = 0')
		.truncate()
		.raw('SET foreign_key_checks = 1')
		.then(function() {
			return knex('notes').insert([
				{ _id: 'cc2cc3e9-5e20-5fbe-83e8-2ff155a7b993', title: 'rowValue1', textBody: 'rowValue1', __v: 0 },
				{ _id: 'b573109c-02ed-5389-b402-9d5c06863183', title: 'rowValue2', textBody: 'rowValue2', __v: 2 },
				{ _id: '4b947927-a164-5657-aac6-47b4d3697d03', title: 'rowValue3', textBody: 'rowValue3', __v: 7 }
			]);
		});
};
