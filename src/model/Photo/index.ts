import { Sequelize, DataTypes } from "sequelize";

const db = require("../configDb");

const Property = db.property;

module.exports = (sequelize: Sequelize) => {
  const Photo = sequelize.define("photos", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.JSON,
      allowNull: false,
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
  return Photo;
};
