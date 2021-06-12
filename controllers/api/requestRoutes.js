const router = require('express').Router();
const { Song, Queue } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
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



/* If we have time to create an edit request button,
because we are going to have to edit the song length...
might just not allow user to edit their request - they have to step out of line
and rejoin at the end of the line
*/
// edits the request in the que
/*
router.put('/:id', withAuth, (req, res) => {
    Queue.update(
    {
      song_id: req.body.song_id
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
*/


// deletes the request in the que
router.delete('/:id', withAuth, (req, res) => {
  Queue.destroy({
    where: {
      user_id: req.session.user_id
    }
  })
    .then((deletedRow) => {
      if(deletedRow = 1) {
        console.log("Song deleted successfully")
        res.status(200).end();
      } else {
        console.log("You are not in the queue!")
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.json(err)
    })
});


module.exports = router;