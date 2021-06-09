const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Requests extends Model {}

Requests.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'user',
              key: 'id',
            },
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'song',
              key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'requests'
    }
);

module.exports = Requests;