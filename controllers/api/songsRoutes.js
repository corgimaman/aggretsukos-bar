const router = require('express').Router();
const { Song } = require('../../models/');

// gets a list of all the songs available
router.get('/', (req, res) => {
  Song.findAll({
    order: ['song_name']
  })
  .then((allSong) => {
    res.json(allSong)
  })
  .catch((err) => {
    res.json(err)
  })
});

// gets only one song from the list
router.get('/:id', (req, res) => {
  Song.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((oneSong) => {
    res.json(oneSong)
  })
  .catch((err) => {
    res.json(err)
  })
});

module.exports = router;