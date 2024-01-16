import { Sequelize, DataTypes } from "sequelize";

const db = require("../configDb");

const User = db.user;

const Room = db.room;

module.exports = (sequelize: Sequelize) => {
  const Booking = sequelize.define("bookings", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    hotelName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roomName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    checkInDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    checkOutDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Booking;
};
