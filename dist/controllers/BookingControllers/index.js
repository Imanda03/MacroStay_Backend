"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBooking = exports.addBooking = void 0;
const db = require("../../model/configDb");
const Users = db.user;
const Room = db.room;
const Booking = db.booking;
const addBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, roomId } = req.params;
    const { hotelName, roomName, price, checkInDate, checkOutDate } = req.body;
    try {
        const user = yield Users.findByPk(userId);
        if (!user)
            return res.status(404).json({ error: "User Not Found" });
        const room = yield Room.findByPk(roomId);
        if (!room)
            return res.status(404).json({ error: "Room Not Found" });
        if (room) {
            if (room.available) {
                room.available = false;
                yield Room.save;
            }
            else {
                return res.status(404).json({ error: "Room not available" });
            }
        }
        const newBooking = yield Booking.create({
            hotelName,
            roomName,
            price,
            checkInDate,
            checkOutDate,
            userId,
            roomId,
        });
        res.status(200).json(newBooking);
    }
    catch (error) {
        console.log(error);
        res.status(500).json("Room Error: " + error);
    }
});
exports.addBooking = addBooking;
const getBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const booking = yield Booking.findByPk(userId);
        if (!booking)
            return res.status(400).json({ error: "No booking yet!!" });
        res.status(200).json(booking);
    }
    catch (error) { }
});
exports.getBooking = getBooking;
