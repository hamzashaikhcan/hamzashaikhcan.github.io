const Objection = require('objection');
const { Model } = require('objection');
const path = require('path');

class Portfolio extends Model {
	static get tableName() {
		return 'contacts';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['title'],

			properties: {
				id: { type: 'integer' },
				name: { type: 'string' },
				email: { type: 'string' },
				subject: { type: 'string' },
				message: { type: 'string' },
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
