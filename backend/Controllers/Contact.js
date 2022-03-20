const Contact = require('../Database/Models/Contact');
const { StatusCode } = require('../Utils/statusCodes');

const create = async (body) => {
	try {
		const data = await Contact.query().insert(body);
		return { result: { status: StatusCode.CREATED, data: data } };
	} catch (err) {
		return {
			error: {
				status: StatusCode.BAD_REQUEST,
				data: err.message,
			},
		};
	}
};

const get = async (id) => {
	try {
		const data = await Contact.query().findById(id);
		return { result: { status: StatusCode.SUCCESS, data: data } };
	} catch (err) {
		return {
			error: {
				status: StatusCode.BAD_REQUEST,
				data: err.message,
			},
		};
	}
};

const list = async () => {
	const data = await Contact.query().orderBy('id');

	return { result: { status: StatusCode.SUCCESS, data: data } };
};

const update = async (id, body) => {
	try {
		const data = await Contact.query()
			.findById(id)
			.patch({ status: body })
			.throwIfNotFound({
				code: StatusCode.NOT_FOUND,
				data: 'Contact not found',
			});
		return { result: { status: StatusCode.SUCCESS, data: data } };
	} catch (err) {
		return {
			error: {
				status: StatusCode.BAD_REQUEST,
				data: err.message,
			},
		};
	}
};

const deleteData = async (id) => {
	try {
		await Contact.query().deleteById(id).throwIfNotFound();
		return {
			result: {
				status: StatusCode.SUCCESS,
				data: {
					data: 'Contact deleted',
				},
			},
		};
	} catch (err) {
		return {
			error: {
				status: StatusCode.BAD_REQUEST,
				data: err.message,
			},
		};
	}
};

module.exports = {
	create,
	list,
	get,
	update,
	deleteData,
};
