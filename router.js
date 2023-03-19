const router = require('express').Router();

const roleRoutes = require('./views/roleRoutes');
const userRoutes = require('./views/userRoutes');
const appointRoutes = require('./views/appointRoutes');
const interventionRoutes = require('./views/interventionRoutes');

router.use('/', roleRoutes)
router.use('/', userRoutes);
router.use('/', appointRoutes);
router.use('/', interventionRoutes);



module.exports = router;