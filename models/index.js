// queue has many users
// queue has many songs
// user has many favorite songs
// user has 1 request(?)
//const Favorites = require('./Favorites');
const Order = require('./Order');
const Queue = require('./Queue');
//const Requests = require('./Requests');
const Song = require('./Song');
const User = require('./User');

//TO DO: file needs association for favorites
// user has many favorites, through favorite table
// user has many requests, through requests

Song.hasMany(Queue)
Queue.belongsTo(Song)

// Queue.hasMany(Song)
// Song.belongsTo(Queue)
// Queue.hasMany(User, {foreignKey: 'user_id'})
// User.belongsTo(Queue)


//User.hasMany(Favorites)



module.exports = {
  //  Favorites,
    Order,
    Queue,
  //  Requests,
    Song,
    User
};

