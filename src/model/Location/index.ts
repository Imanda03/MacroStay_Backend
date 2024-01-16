import { Sequelize, DataTypes } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  const Location = sequelize.define("location", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    placeImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Location;
};
