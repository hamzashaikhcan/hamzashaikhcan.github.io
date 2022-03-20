exports.seed = async function (knex) {
	try {
		await knex('sub_tasks')
			.insert([
				{ id: 1, title: 'Pick up the clothes', todo_id: 1, status: 'pending' },
				{
					id: 1,
					title: 'Throw the clothes in the machine',
					todo_id: 1,
					status: 'pending',
				},
				{ id: 3, title: 'Turn on the machine', todo_id: 1, status: 'pending' },
				{
					id: 4,
					title: 'Bring back the clothes',
					todo_id: 1,
					status: 'pending',
				},
				{ id: 5, title: 'Dry the clothes', todo_id: 1, status: 'pending' },
			])
			.onConflict('id')
			.ignore();
	} catch (err) {
		console.log(err);
	}
};
