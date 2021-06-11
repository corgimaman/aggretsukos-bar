const router = require('express').Router();
const { Song, Queue } = require('../../models/');

// puts a request for a song in the que
router.post('/', (req, res) => {
  Queue.create({
    user_id: session.body.song_name,
    song_id: 
  })
  .then((newSong) => {
    res.json(newSong)
  })
  .catch((err) => {
    res.json(err)
  })
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