//const Favorites = require('./Favorites');
const Order = require('./Order');
const Queue = require('./Queue');
//const Requests = require('./Requests');
const Song = require('./Song');
const User = require('./User');

Song.hasMany(Queue)
Queue.belongsTo(Song)

module.exports = {
  //  Favorites,
    Order,
    Queue,
  //  Requests,
    Song,
    User
};

