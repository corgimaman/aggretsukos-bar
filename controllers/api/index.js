const router = require('express').Router();

const songsRoutes = require('./songsRoutes');
const requestRoutes = require('./requestRoutes');
const userRoutes = require('./userRoutes');

router.use('/songs', songsRoutes);
router.use('/request', requestRoutes);
router.use('/users', userRoutes);

module.exports = router;