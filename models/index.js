// queue has many users
// queue has many songs
// user has many favorite songs
// user has 1 request(?)
const Favorites = require('./Favorites');
const Order = require('./Order');
const Queue = require('./Queue');
const Requests = require('./Requests');
const Song = require('./Song');
const User = require('./User');

//TO DO: file needs association for favorites



module.exports = {
    Favorites,
    Order,
    Queue,
    Requests,
    Song,
    User
};

