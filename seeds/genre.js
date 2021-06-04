const { Genre } = require('../models');

const genre = [
  {
    genre_name: 'Pop',
  },
  {
    genre_name: 'Rock',
  },
  {
    genre_name: 'Rap',
  },
  {
    genre_name: 'R&B',
  },
  {
    genre_name: 'Techno',
  },
  {
    genre_name: 'Metal',
  },
];

const seedGenre = () => Genre.bulkCreate(genreData);

module.exports = seedGenre;