"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = require("../configDb");
const Property = db.property;
module.exports = (sequelize) => {
    const Photo = sequelize.define("photos", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        image: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: false,
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
    return Photo;
};
