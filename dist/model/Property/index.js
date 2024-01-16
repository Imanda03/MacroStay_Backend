"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = require("../../model/configDb");
const Location = db.location;
module.exports = (sequelize) => {
    const Property = sequelize.define("properties", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: sequelize_1.DataTypes.FLOAT,
        },
        addresses: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        oldPrice: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        newPrice: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        },
        latitude: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        locationId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Location,
                key: "id",
            },
        },
    });
    return Property;
};
