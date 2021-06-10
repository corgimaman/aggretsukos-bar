// queue has many users
// queue has many songs
// user has many favorite songs
// user has 1 request(?)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// const Album = require('./Album');
const Artist = require('./Artist');
const Favorites = require('./Favorites');
// const Genre = require('./Genre');
const Order = require('./Order');
const Queue = require('./Queue');
const Requests = require('./Requests');
const Song = require('./Song');
const User = require('./User');

/*const ArtistGenre = sequelize.define('ArtistGenre', {
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Artist,
        key: 'id'
      }
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Genre,
        key: 'id'
      }
    }
  });

  //foreign keys ONLY for artist and song


Artist.belongsToMany(Genre, {through: ArtistGenre});*/
Artist.hasMany(Song, {
    foreignKey: 'artist_id'
})
/*Artist.hasMany(Album, {
    foreignKey: 'artist_id'
})

Album.belongsTo(Artist)
Album.belongsTo(Genre)

Genre.hasMany(Song)
Genre.hasMany(Album)
Genre.belongsToMany(Artist, {through: ArtistGenre})

Song.hasOne(Album);
Song.belongsTo(Album, {
    foreignKey: 'album_id'
});*/

//Song.hasOne(Artist);
// Song.belongsTo(Artist, {
//     foreignKey: 'artist_id'
// });


module.exports = {
    //Album,
    Artist,
    Favorites,
   // Genre,
    Order,
    Queue,
    Requests,
    Song,
    User
};

