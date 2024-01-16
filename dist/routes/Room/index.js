"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RoomController_1 = require("../../controllers/RoomController");
const router = (0, express_1.Router)();
router.post("/:propertyId", RoomController_1.addRoom);
router.get("/", RoomController_1.getAllRoom);
router.get("/:roomId", RoomController_1.getRoom);
module.exports = router;
