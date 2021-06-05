const router = require('express').Router();
const userRoutes = require('./userRoutes');
const songRoutes = require('./songRoutes');

router.use('/users', userRoutes);
router.use('/projects', songRoutes);

module.exports = router;