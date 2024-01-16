import { Sequelize, DataTypes } from "sequelize";

module.exports = (sequelize: Sequelize) => {
  const Users = sequelize.define("users", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      defaultValue: "test@example.com",
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Users;
};
