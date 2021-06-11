const router = require('express').Router();
//const songRoutes = require('./queueRoutes');
const requestRoutes = require('./requestRoutes');
const userRoutes = require('./userRoutes');

//router.use('/song', songRoutes);
router.use('/request', requestRoutes);
router.use('/users', userRoutes);

module.exports = router;