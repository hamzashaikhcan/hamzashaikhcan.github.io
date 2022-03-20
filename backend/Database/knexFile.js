module.exports = {
	client: 'pg',
	connection: {
		host: 'ec2-44-194-167-63.compute-1.amazonaws.com',
		user: 'yvxnqcmzpwzszo',
		password:
			'f5aa0ab5c275de5537a9afd9d308fd8c69b80b2d656bfeb336103f8a10e2f36c',
		database: 'dc5ip6135hnt7k',
		port: 5432,
		timezone: 'UTC',
		ssl: {
			rejectUnauthorized: false,
		},
	},
	migrations: {
		directory: __dirname + '/Migrations',
	},
	seeds: {
		directory: __dirname + '/Seeds',
	},
};
