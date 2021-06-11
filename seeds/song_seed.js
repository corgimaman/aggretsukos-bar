const { Song } = require('../models');

const song = [
    {
        song_name: 'September',
    },
    {
        song_name: 'I Wanna Dance with Somebody',
    },
    {
        song_name: 'Africa',
    },
    {
        song_name: 'Stand by Me',
    },
    {
        song_name: 'Footloose',
    },
    {
        song_name: 'Sweet Dreams',
    },
    {
        song_name: 'This Love',
    },
    {
        song_name: 'Mr. Brightside',
    },
    {
        song_name: 'Hey Ya!',
    },
    {
        song_name: "Don't Stop Believin",
    },
    {
        song_name: 'I Want It That Way',
    },
    {
        song_name: 'Billie Jean',
    },
    {
        song_name: 'Uptown Girl',
    },
    {
        song_name: 'Escape',
    },
    {
        song_name: "Come On Eileen",
    },
    {
        song_name: 'All Star',
    },
    {
        song_name: 'Wonderwall',
    },
    {
        song_name: 'Stayin Alive',
    },
    {
        song_name: 'Take on Me',
    },
    {
        song_name: 'Rehab',
    },
    {
        song_name: 'Ignition',
    },
    {
        song_name: 'You Give Lobe A Bad Name',
    },
    {
        song_name: 'Kiss',
    },
    {
        song_name: 'Wannabe',
    },
    {
        song_name: 'Uptown Funk',
    },
    {
        song_name: 'Faith',
    },
    {
        song_name: 'Oops!... I Did It Again',
    },
    {
        song_name: 'Lola',
    },
    {
        song_name: 'Respect',
    },
    {
        song_name: 'Yesterday',
    },
    {
        song_name: 'Funky Cold Medina',
    },
    {
        song_name: 'I Wish',
    },
    {
        song_name: "Tearin' up My Heart",
    }
];

const seedsong = () => Song.bulkCreate(songData);

module.exports = seedsong;