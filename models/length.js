const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Length extends Model { }

Length.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        song_length: {
            type: DataTypes.TIME,
            allowNull: false
        },
        artist_id: {
            type: DataTypes.INTEGER,
            regerences: {
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
        },
        genre_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'genre',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'length',
    }
);

module.exports = Length;