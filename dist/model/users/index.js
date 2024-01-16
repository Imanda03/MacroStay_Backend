"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize) => {
    const Users = sequelize.define("users", {
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: "test@example.com",
            allowNull: false,
        },
        gender: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    });
    return Users;
};
