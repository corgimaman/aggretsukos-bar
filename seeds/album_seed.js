const { Album } = require('../models');

const album = [
  {
    album: 'The Best of Earth, Wind and Fire Vol. 1',
  },
  {
    album: 'Whitney',
  },
  {
    album: 'Toto IV',
  },
  {
    album: "Don't Play That Song (Mono)",
  },
  {
    album: 'Footloose',
  },
  {
    album: 'Sweet Dreams (Are Made Of This)',
  },
  {
    album: 'Songs About Jane',
  },
  {
    album: 'Hot Fuss',
  },
  {
    album: 'Speakerboxxx/The Love Below',
  },
  {
    album: '80s 100 Hits',
  },
  {
    album: 'The Hits--Chapter One',
  },
  {
    album: 'Thriller',
  },
  {
    album: 'An Innocent Man',
  },
  {
    album: 'Partners In Crime',
  },
  {
    album: "Come On Eileen / Dubious",
  },
  {
    album: 'Astro Lounge',
  },
  {
    album: "(What's The Story) Morning Glory",
  },
  {
    album: 'How Can You Mend A Broken Heart',
  },
  {
    album: 'Hunting High and Low',
  },
  {
    album: 'Back To Black',
  },
  {
    album: 'The Essential R. Kelly',
  },
  {
    album: 'Slippery When Wet',
  },
  {
    album: 'Parade',
  },
  {
    album: 'Spice',
  },
  {
    album: 'Uptown Special',
  },
  {
    album: 'Faith',
  },
  {
    album: 'Oops!... I Did It Again',
  },
  {
    album: 'Lola vs. Powerman and the Moneygoround',
  },
  {
    album: 'Atlantic',
  },
  {
    album: 'Help',
  },
  {
    album: 'Loc-ed After Dark',
  },
  {
    album: 'I Wish',
  },
  {
    album: "'N Sync",
  }
];

const seedAlbum = () => Album.bulkCreate(album);

module.exports = seedAlbum;