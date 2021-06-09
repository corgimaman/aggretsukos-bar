const { Artist } = require('../models');

const artist = [
  {
    artist_name: 'Earth, Wind and Fire',
  },
  {
    artist_name: 'Whitney Houston',
  },
  {
    artist_name: 'TOTO',
  },
  {
    artist_name: 'Ben E. King',
  },
  {
    artist_name: 'Kenny Loggins',
  },
  {
    artist_name: 'Eurythmics',
  },
  {
    artist_name: 'Maroon 5',
  },
  {
    artist_name: 'The Killers',
  },
  {
    artist_name: 'Outkast',
  },
  {
    artist_name: 'Journey',
  },
  {
    artist_name: 'Backstreet Boys',
  },
  {
    artist_name: 'Michael Jackson',
  },
  {
    artist_name: 'Billy Joel',
  },
  {
    artist_name: 'Rupert Holmes',
  },
  {
    artist_name: "Dexy's Midnight Runners",
  },
  {
    artist_name: 'Smash Mouth',
  },
  {
    artist_name: 'Oasis',
  },
  {
    artist_name: 'Bee Gees',
  },
  {
    artist_name: 'a-ha',
  },
  {
    artist_name: 'Amy Winehous',
  },
  {
    artist_name: 'R. Kelly',
  },
  {
    artist_name: 'Bon Jovi',
  },
  {
    artist_name: 'Prince',
  },
  {
    artist_name: 'Spice Girls',
  },
  {
    artist_name: 'Mark Ronson, Bruno Mars',
  },
  {
    artist_name: 'George Michael',
  },
  {
    artist_name: 'Britney Spears',
  },
  {
    artist_name: 'The Kinks',
  },
  {
    artist_name: 'Aretha Franklin',
  },
  {
    artist_name: 'The Beatles',
  },
  {
    artist_name: 'Tone-Loc',
  },
  {
    artist_name: 'Skee-Lo',
  },
  {
    artist_name: 'NSYNC',
  }
];

const seedArtist = () => Artist.bulkCreate(artist);

module.exports = seedArtist;