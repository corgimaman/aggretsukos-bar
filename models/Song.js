const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Song extends Model {}

Song.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        song_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        length: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        /*{
            artist: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },*/
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'artist',
                key: 'id'
            }
        },
        /*album_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'album',
                key: 'id'
            }
        },
        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'genre',
                key: 'id'
            }
        },*/
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'song',
    }
);

module.exports = Song;