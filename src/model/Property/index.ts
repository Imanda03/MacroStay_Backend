import { Sequelize, DataTypes } from "sequelize";

const db = require("../../model/configDb");

const Location = db.location;

module.exports = (sequelize: Sequelize) => {
  const Property = sequelize.define("properties", {
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
    rating: {
      type: DataTypes.FLOAT,
    },
    addresses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oldPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    newPrice: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Location,
        key: "id",
      },
    },
  });
  return Property;
};
