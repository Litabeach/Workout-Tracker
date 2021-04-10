const router = require('express').Router();

//collect all api endpoints
const apiRoutes = require('./api-routes');
const htmlRoutes = require('./html-routes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes)

module.exports = router;