"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    const Location = sequelize.define("location", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        place: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        placeImage: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        shortDescription: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    });
    return Location;
};
