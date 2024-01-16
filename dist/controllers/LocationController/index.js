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
exports.deleteLocation = exports.modifyLocation = exports.getLocation = exports.getAllLocation = exports.addLocation = void 0;
const db = require("../../model/configDb");
const Location = db.location;
const Property = db.property;
const addLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { place, placeImage, shortDescription } = req.body;
    try {
        const newLocation = yield Location.create({
            place,
            placeImage,
            shortDescription,
        });
        res.status(200).json(newLocation);
    }
    catch (error) {
        res.status(500).json("Location. Error" + error);
    }
});
exports.addLocation = addLocation;
const getAllLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const location = yield Location.findAll({
            include: [{ model: Property, as: "properties" }],
        });
        res.json(location);
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});
exports.getAllLocation = getAllLocation;
const getLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const location = yield Location.findByPk(id);
        res.status(200).json(location);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getLocation = getLocation;
const modifyLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { locationId } = req.params;
    const { place, placeImage, shortDescription } = req.body;
    try {
        const location = yield Location.findByPk(locationId);
        if (!location) {
            res.status(404).json({ error: "Location not found" });
            return;
        }
        location.place = place;
        location.placeImage = placeImage;
        location.shortDescription = shortDescription;
        yield location.save();
        res.json(location);
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.modifyLocation = modifyLocation;
const deleteLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { locationId } = req.params;
    try {
        const location = yield Location.findByPk(locationId);
        if (!location) {
            res.status(404).json({ error: "Location not found" });
            return;
        }
        yield location.destroy();
        res.status(200).json({ message: "Hotel deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.deleteLocation = deleteLocation;
