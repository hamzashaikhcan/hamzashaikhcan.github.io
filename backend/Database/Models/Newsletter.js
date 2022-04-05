const Objection = require('objection');
const { Model } = require('objection');
const path = require('path');

class Newsletter extends Model {
	static get tableName() {
		return 'newsletters';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['email'],

			properties: {
				id: { type: 'integer' },
				email: { type: 'string' },
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

module.exports = Newsletter;
