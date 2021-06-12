// use song ID + users ID + user first name + created date + soft delete
// validation => 2 john smiths
// look for song has not been selected in last 4 hours (date > Time.NOW - 4 hrs)
// JOIN user + song tables
// song history
// bonus - verify if 2 drinks ordered before allowing queue 

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Queue extends Model {}

Queue.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        song_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'song',
              key: 'id',
            },
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       model: 'user',
        //       key: 'id',
        //     },
        // },
        requested_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        song_completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'queue',
    }
);

module.exports = Queue;