const router = require('express').Router();
const { Song, Queue } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    Queue.findAll({
        order: 'id',
        where: {
           song_completed: false 
        }
    }).then((dbQueue) => {
    // get queue information - contains userid, songid, and length of song in seconds
    const queue = dbQueue.map((queue) => queue.get({plain: true}));
    // need to sum length of songs for each row,...,,lol

    // need to pull username and song name, artist

    // render songs on the songs.handelbars file
    console.log(queue)
    res.render("queue", {
      layout: "queue",
      queue
    }); 
    }).catch((err) => {
        res.json(err)
    })
});


console.log("yawey")
router.post('/', withAuth, async (req, res) => {

  const songId = JSON.parse(req.body.radio);
  // get the length of the song by searching the database by songid
  let length = await Song.findByPk(songId, {
    attributes: ['length']
  }).then((dbSong) => {
    const hello = dbSong.get({plain: true});
    return hello;
  });
// make sure it returns as an integer and not an OBJECT!!!!
  length = length.value;
  // Create new queue row
  Queue.create({
    user_id: req.session.user_id,
    song_id: songId,
    length_song: length
  })
  .then((newSong) => {
    res.status(200).json(newSong)
  })
  .catch((err) => {
    res.status(500).json(err)
  });
});


// marks song as completed and removes from queue fetch display
router.put('/:id', withAuth, (req, res) => {
    Queue.update(
    {
      song_completed: true
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