exports.seed = async function (knex) {
	try {
		await knex('todos')
			.insert([
				{ id: 1, title: 'Do laundary', status: 'pending' },
				{ id: 2, title: 'Do something else', status: 'pending' },
			])
			.onConflict('id')
			.ignore();
	} catch (err) {
		console.log(err);
	}
};
