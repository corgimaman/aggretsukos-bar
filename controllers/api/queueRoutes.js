const router = require('express').Router();
const { Song, Queue, User } = require('../../models/');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  Queue.findAll({
    order: ['id'],
    where: {
      song_completed: false
    },
    include: [{
      model: Song,
      attributes: ['song_name']
    },
    {
      model: User,
      attributes: ['username']
    }],
  }).then((dbQueue) => {
    const queue = dbQueue.map((queues) => queues.get({plain: true}));
    //const queue = dbQueue.get({ plain: true })
    res.render('queueList', {
      style: 'queue.css',
      layout: 'queue',
      queue
    });
    //res.status(200).json(queue)
   /* console.log("success!")
    res.status(200).json(dbQueue);    
    return dbQueue;*/
  }).catch((err) => {
    console.log("no success")
    console.log(err)
    res.json(err)
  })

});

/* router.get('/', async (req, res) => {
  try {
    const queueData = Queue.findAll({
      order: ['id'],
      where: {
        song_completed: false
      },
      include: [{
        model: Song,
        attributes: ['song_name']
      },
      {
        model: User,
        attributes: ['username']
      }],
    });

    const queue = queueData.map((queues) => queues.get({ plain: true }))
    res.status(200).json(queue);    
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
}) */

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