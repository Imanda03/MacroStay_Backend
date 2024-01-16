import { Sequelize, DataType, DataTypes } from "sequelize";

const db = require("../configDb");

const Property = db.property;

module.exports = (sequelize: Sequelize) => {
  const Room = sequelize.define("rooms", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    refundable: {
      type: DataTypes.STRING,
      defaultValue: "refundable",
    },
    payment: {
      type: DataTypes.STRING,
      defaultValue: "pay at property",
    },
    bed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    propertyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Property,
        key: "id",
      },
    },
  });
  return Room;
};
