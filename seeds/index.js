const seedGenre = require('./genre-seeds');
const seedArtist = require('./artist-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedGenre();
    console.log('\n----- GENRE SEEDED -----\n');

    await seedArtist();
    console.log('\n----- ARTISTS SEEDED -----\n');

    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');

    await seedProductTags();
    console.log('\n----- PRODUCT TAGS SEEDED -----\n');

    process.exit(0);
};

seedAll();