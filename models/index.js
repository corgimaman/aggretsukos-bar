// queue has many users
// queue has many songs
// user has many songs
const Album = require('./Album');
const Artist = require('./Artist');
const Genre = require('./Genre');
const Length = require('./Length');
const Song = require('./Song');
const User = require('./User');

Song.belongsTo(Length)
Length.belongsTo(Genre)
Genre.belongsTo(Artist)
Artist.belongsTo(Album)

Genre.hasMany(Song)


module.exports = {
    Album,
    Artist,
    Genre,
    Length,
    Song
};

