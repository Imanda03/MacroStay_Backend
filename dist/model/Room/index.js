"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = require("../configDb");
const Property = db.property;
module.exports = (sequelize) => {
    const Room = sequelize.define("rooms", {
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
        size: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        refundable: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: "refundable",
        },
        payment: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: "pay at property",
        },
        bed: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        available: {
            type: sequelize_1.DataTypes.BOOLEAN,
            defaultValue: true,
        },
        propertyId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Property,
                key: "id",
            },
        },
    });
    return Room;
};
