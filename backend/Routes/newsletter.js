const router = require('express').Router();
const Newsletter = require('../Controllers/Newsletter');
const { StatusCode } = require('../Utils/statusCodes');

router.get('/', async (req, res) => {
	const { result, error } = await Newsletter.list();
	if (error) {
		res.status(error.status).json({
			message: error.data,
		});
	} else if (result) {
		res.status(result.status).json({
			message: result.data,
		});
	} else {
		res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
	}
});

router.get('/:id', async (req, res) => {
	const { result, error } = await Newsletter.get(req.params.id);
	if (error) {
		res.status(error.status).json({
			message: error.data,
		});
	} else if (result) {
		res.status(result.status).json({
			message: result.data,
		});
	} else {
		res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
	}
});

router.post('/', async (req, res) => {
	const { result, error } = await Newsletter.create(req.body);
	if (error) {
		res.status(error.status).json({
			response: error.data,
		});
	} else if (result) {
		res.status(result.status).json({
			response: result.data,
		});
	} else {
		res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
	}
});

router.patch('/:id', async (req, res) => {
	const { result, error } = await Newsletter.update(
		req.params.id,
		req.body.status,
	);

	if (error) {
		if (error.data === 'NotFoundError') {
			res.status(StatusCode.NOT_FOUND).json({ data: 'Data not found' });
		} else {
			res.status(StatusCode.NOT_FOUND).json(error);
		}
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
	}
});

module.exports = router;
