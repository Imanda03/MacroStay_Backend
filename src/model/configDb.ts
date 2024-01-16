"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
import { Sequelize } from "sequelize";
const sequelize = new Sequelize("TestDb", "root", "anish", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

//Check the connection to the database
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db: any = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// db.users = require("./users")(sequelize);
db.location = require("./Location")(sequelize);
db.property = require("./Property")(sequelize);
db.room = require("./Room")(sequelize);
db.photo = require("./Photo")(sequelize);
db.user = require("./User")(sequelize);
db.booking = require("./Booking")(sequelize);

db.location.hasMany(db.property, { as: "properties" });
db.property.belongsTo(db.location);

db.property.hasMany(db.photo, { as: "photos" });
db.photo.belongsTo(db.property);

db.property.hasMany(db.room, { as: "rooms" });
db.room.belongsTo(db.property);

db.room.hasMany(db.booking, { as: "bookings" });
db.booking.belongsTo(db.room);

db.user.hasMany(db.booking, { as: "bookings" });
db.booking.belongsTo(db.user);

db.sequelize.sync().then(() => {
  console.log("Re-Sync");
});

module.exports = db;
