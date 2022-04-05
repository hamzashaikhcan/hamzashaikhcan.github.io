const Objection = require('objection');
const { Model } = require('objection');
const path = require('path');

class Portfolio extends Model {
	static get tableName() {
		return 'portfolios';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['title'],

			properties: {
				id: { type: 'integer' },
				title: { type: 'string' },
				image: { type: 'string' },
				tags: { type: 'string' },
				link: { type: 'string' },
				role: { type: 'string' },
				completed_at: { type: 'string' },
				description: { type: 'string' },
			},
		};
	}

	$beforeInsert() {
		this.created_at = new Date().toISOString();
	}

	$beforeUpdate() {
		this.updated_at = new Date().toISOString();
	}
}

module.exports = Portfolio;
