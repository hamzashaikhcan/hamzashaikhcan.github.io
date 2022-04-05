const Newsletter = require('../Database/Models/Newsletter');
const { StatusCode } = require('../Utils/statusCodes');

const create = async (body) => {
	try {
		const exists = await Newsletter.query().findOne({ email: body.email });
		if (exists) {
			return {
				error: {
					status: StatusCode.BAD_REQUEST,
					data: 'Email already exists',
				},
			};
		} else {
			const data = await Newsletter.query().insert(body);
			return { result: { status: StatusCode.CREATED, data: data } };
		}
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
		const data = await Newsletter.query().findById(id);
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
	const data = await Newsletter.query().orderBy('id');

	return { result: { status: StatusCode.SUCCESS, data: data } };
};

const update = async (id, body) => {
	try {
		const data = await Newsletter.query()
			.findById(id)
			.patch({ status: body })
			.throwIfNotFound({
				code: StatusCode.NOT_FOUND,
				data: 'Newsletter not found',
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
		await Newsletter.query().deleteById(id).throwIfNotFound();
		return {
			result: {
				status: StatusCode.SUCCESS,
				data: {
					data: 'Newsletter deleted',
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
