const router = require('express').Router();

const songsRoutes = require('./songsRoutes');
const queueRoutes = require('./queueRoutes');
const userRoutes = require('./userRoutes');

router.use('/songs', songsRoutes);
router.use('/queue', queueRoutes);
router.use('/users', userRoutes);

module.exports = router;