"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookingControllers_1 = require("../../controllers/BookingControllers");
const router = (0, express_1.Router)();
router.post("/:userId/:roomId", BookingControllers_1.addBooking);
router.get("/:userId", BookingControllers_1.getBooking);
module.exports = router;
