const router = require('express').Router();
const { Song } = require('../../models/');
// do not have to be logged in to see songs, so no withAuth

// gets a list of all the songs available
router.get('/', (req, res) => {
  Song.findAll({
    // read all songs from database + sort by artist name
    order: ['artist']
  })
  .then((dbSongs) => {
    // get song information
    const songs = dbSongs.map((song) => song.get({plain: true}));
    // render songs on the songs.handelbars file
    res.render("songList", {
      style: 'songs.css',
      layout: "songs",
      songs
    });
  })
  .catch((err) => {
    res.json(err)
  })
});

// gets only one song from the list
// probably use this route for favorites
router.get('/:id', (req, res) => {
  Song.findByPk(req.params.id)
  .then((oneSong) => {
    if (!oneSong) {
      res.status(404).json({message: "No song found with this ID!"});
      return;
    } else {
      const song = oneSong.get({plain: true});
      res.status(200).json(song);    
    }
  })
  .catch((err) => {
    res.status(500).json(err);
  })
});

module.exports = router;