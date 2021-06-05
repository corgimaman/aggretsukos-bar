const seedAlbum = require('./album_seed');
const seedArtist = require('./artist_seed');
const seedGenre = require('./genre_seed');
const seedLength = require('./length_seed');
const seedSong = require('./song_seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedAlbum();
    console.log('\n----- ALBUM SEEDED -----\n');
    
    await seedArtist();
    console.log('\n----- ARTIST SEEDED -----\n');
    
    await seedGenre();
    console.log('\n----- GENRE SEEDED -----\n');
    
    await seedLength();
    console.log('\n----- LENGTH SEEDED -----\n');
    
    await seedSong();
    console.log('\n----- SONG SEEDED -----\n');

    process.exit(0);
};

seedAll();