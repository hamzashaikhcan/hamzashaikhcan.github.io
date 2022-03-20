const Portfolio = require('../Database/Models/Portfolio');
const { StatusCode } = require('../Utils/statusCodes');

const create = async (body) => {
	try {
		const data = await Portfolio.query().insert(body);
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
		const data = await Portfolio.query().findById(id);
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
	const data = await Portfolio.query().orderBy('id');

	return { result: { status: StatusCode.SUCCESS, data: data } };
};

const update = async (id, body) => {
	try {
		const data = await Portfolio.query()
			.findById(id)
			.patch({ status: body })
			.throwIfNotFound({
				code: StatusCode.NOT_FOUND,
				data: 'Portfolio not found',
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
		await Portfolio.query().deleteById(id).throwIfNotFound();
		return {
			result: {
				status: StatusCode.SUCCESS,
				data: {
					data: 'Portfolio deleted',
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
