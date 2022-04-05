const router = require('express').Router();

router.use('/portfolio', require('./portfolio'));
router.use('/contact', require('./contact'));
router.use('/newsletter', require('./newsletter'));

module.exports = router;
