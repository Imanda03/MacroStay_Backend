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
exports.getRoom = exports.getAllRoom = exports.addRoom = void 0;
const db = require("../../model/configDb");
const Property = db.property;
const Room = db.room;
const addRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { propertyId } = req.params;
    const { name, size, refundable, payment, bed } = req.body;
    try {
        const property = yield Property.findByPk(propertyId);
        if (!property) {
            res.status(404).json({ error: "Property not found" });
            return;
        }
        const newRoom = yield Room.create({
            name,
            size,
            refundable,
            payment,
            bed,
            propertyId,
        });
        res.status(200).json(newRoom);
    }
    catch (error) {
        res.status(500).json("Room Error: " + error);
    }
});
exports.addRoom = addRoom;
const getAllRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield Room.findAll();
        res.status(200).json(rooms);
    }
    catch (error) {
        res.status(500).json("Room Error: " + error);
    }
});
exports.getAllRoom = getAllRoom;
const getRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { roomId } = req.params;
    try {
        const rooms = yield Room.findByPk(roomId);
        if (!rooms)
            return res.status(404).json({ message: "Room not found" });
        res.status(200).json(rooms);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getRoom = getRoom;
