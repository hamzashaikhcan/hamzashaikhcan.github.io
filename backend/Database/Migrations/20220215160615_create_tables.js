exports.up = function (knex) {
	return knex.schema
		.createTable('portfolios', (t) => {
			t.increments();
			t.string('title').notNullable();
			t.string('image');
			t.string('tags');
			t.string('link');
			t.string('completed_at');
			t.string('description');
			t.timestamp('created_at').defaultTo(knex.fn.now());
			t.timestamp('updated_at').defaultTo(knex.fn.now());
		})
		.createTable('services', (t) => {
			t.increments();
			t.string('name');
			t.string('image');
			t.string('description');
			t.timestamp('created_at').defaultTo(knex.fn.now());
			t.timestamp('updated_at').defaultTo(knex.fn.now());
		})
		.createTable('newsletters', (t) => {
			t.increments();
			t.string('email').notNullable();
			t.timestamp('created_at').defaultTo(knex.fn.now());
			t.timestamp('updated_at').defaultTo(knex.fn.now());
		})
		.createTable('contacts', (t) => {
			t.increments();
			t.string('name').notNullable();
			t.string('email').notNullable();
			t.string('subject').notNullable();
			t.string('message').notNullable();
			t.timestamp('created_at').defaultTo(knex.fn.now());
			t.timestamp('updated_at').defaultTo(knex.fn.now());
		});
};
exports.down = function (knex) {
	return knex.schema
		.dropTable('portfolios')
		.dropTable('services')
		.dropTable('newsletters')
		.dropTable('contacts');
};
