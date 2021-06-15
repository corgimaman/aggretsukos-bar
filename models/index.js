const Queue = require('./Queue');
const Song = require('./Song');
const User = require('./User');

Song.hasMany(Queue)
Queue.belongsTo(Song)

User.hasMany(Queue)
Queue.belongsTo(User)

module.exports = {
    Queue,
    Song,
    User
};

