exports.seed = async function (knex) {
	try {
		await knex('portfolios')
			.insert([
				{
					id: 1,
					title: 'Zircon',
					image: 'https://i.ibb.co/s1r9mbT/zircon-1.png',
					tags: 'web, node.js, cloud',
					link: 'https://zircon.pk/',
					completed_at: 'January, 2022',
					description: 'Ecommerce PWA application dealing in Jewelry',
					role: 'Full-stack Developer',
				},
				{
					id: 2,
					title: 'Food Capital',
					image: 'https://i.ibb.co/WHGhhMP/P1.png',
					tags: 'web, node.js, react.js, cloud',
					link: 'http://food-capital-new.herokuapp.com/',
					completed_at: 'October, 2021',
					description: 'Food ordering SaaS Application based in Australia.',
					role: 'Full-stack Developer',
				},
				{
					id: 3,
					title: 'Levvy',
					image: 'https://i.ibb.co/kJmyDyG/levvy.png',
					tags: 'web, node.js, react.js, aws',
					link: 'https://levvy.com/',
					completed_at: 'April, 2022',
					description: 'Fintech SaaSOps Application based in America.',
					role: 'Backend Developer',
				},
			])
			.onConflict('id')
			.ignore();
	} catch (err) {
		console.log(err);
	}
};
