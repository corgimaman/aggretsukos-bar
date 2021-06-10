const { Song } = require('../models');
const songData = require('./songs.json')


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await Song.bulkCreate(songData);
    console.log('\n----- SONGS SEEDED -----\n');


    process.exit(0);
};

seedAll();