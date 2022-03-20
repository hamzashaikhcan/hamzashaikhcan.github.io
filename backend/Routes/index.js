const router = require('express').Router();

router.use('/portfolio', require('./portfolio'));
router.use('/contact', require('./contact'));

module.exports = router;
