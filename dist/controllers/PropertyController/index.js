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
exports.getProperty = exports.getAllProperty = exports.addProperty = void 0;
const db = require("../../model/configDb");
const Location = db.location;
const Property = db.property;
const Photo = db.photo;
const Room = db.room;
const addProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { locationId } = req.params;
    const { name, rating, addresses, oldPrice, newPrice, image, latitude, longitude, } = req.body;
    try {
        const location = yield Location.findByPk(locationId);
        if (!location) {
            res.status(401).json({ error: "Location not found" });
            return;
        }
        const newProperty = yield Property.create({
            name,
            rating,
            addresses,
            oldPrice,
            newPrice,
            image,
            latitude,
            longitude,
            locationId: locationId,
        });
        res.status(200).json(newProperty);
    }
    catch (error) {
        res.status(500).json("Property. Error" + error);
    }
});
exports.addProperty = addProperty;
const getAllProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const property = yield Property.findAll({
            include: [
                { model: Photo, as: "photos" },
                { model: Room, as: "rooms" },
            ],
        });
        res.json(property);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllProperty = getAllProperty;
const getProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { propertyId } = req.params;
    try {
        const property = yield Property.findByPk(propertyId);
        if (!property) {
            res.status(404).json({ error: "No such property " });
            return;
        }
        res.status(200).json(property);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getProperty = getProperty;
