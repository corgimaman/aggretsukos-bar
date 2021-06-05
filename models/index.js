const Album = require('./album');
const Artist = require('./artist');
const Genre = require('./genre');
const Length = require('./length');
const Song = require('./song');

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
