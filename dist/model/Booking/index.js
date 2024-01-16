"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = require("../configDb");
const User = db.user;
const Room = db.room;
module.exports = (sequelize) => {
    const Booking = sequelize.define("bookings", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        hotelName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        roomName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        checkInDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        checkOutDate: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        roomId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Booking;
};
