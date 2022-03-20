const router = require('express').Router();
const Contact = require('../Controllers/Contact');
const { StatusCode } = require('../Utils/statusCodes');

router.get('/', async (req, res) => {
	const { result, error } = await Contact.list();
	if (error) {
		res.status(error.status).json(error.data);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
	}
});

router.get('/:id', async (req, res) => {
	const { result, error } = await Contact.get(req.params.id);
	if (error) {
		res.status(error.status).json(error.data);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
	}
});

router.post('/', async (req, res) => {
	const { result, error } = await Contact.create(req.body);
	if (error) {
		res.status(error.status).json(error.data);
	} else if (result) {
		res.status(result.status).json(result.data);
	} else {
		res.sendStatus(StatusCode.INTERNAL_SERVER_ERROR);
	}
});

router.patch('/:id', async (req, res) => {
	const { result, error } = await Contact.update(
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
