const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Genre extends Model { }

Genre.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        genre_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'artist',
                key: 'id'
            }
        },
        album_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'album',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'genre',
    }
);

module.exports = Genre;