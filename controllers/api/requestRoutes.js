const router = require('express').Router();
const { Song, Queue } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
  // get the length of the song by searching the database by songid
  const length = await Song.findByPk(req.body.song_id, {
    attributes: ['length']
  });

  // make sure it returns as an integer and not a string
  length = PARSEINT(length);

  // Create new queue row
  Queue.create({
    user_id: req.session.user_id,
    song_id: req.body.song_id,
    length_song: length
  })
  .then((newSong) => {
    res.status(200).json(newSong)
  })
  .catch((err) => {
    res.status(500).json(err)
  });
});




// edits the request in the que
router.put('/:id', (req, res) => {

    song.update(
    {
      song_name: req.body.song_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then((updatedSong) => {
      res.json(updatedSong)
    })
    .catch((err) => {
      res.json(err)
    })
});


// deletes the request in the que
router.delete('/:id', (req, res) => {
  Song.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deletedSong) => {
      res.json(deletedSong)
    })
    .catch((err) => {
      res.json(err)
    })
});


module.exports = router;