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
exports.getPhoto = exports.getAllPhotos = exports.addPhoto = void 0;
const db = require("../../model/configDb");
const Property = db.property;
const Photo = db.photo;
const addPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { propertyId } = req.params;
    const { image } = req.body;
    try {
        const property = yield Property.findByPk(propertyId);
        if (!property)
            return res.status(404).json({ error: "Property not found" });
        const newPhoto = yield Photo.create({ image, propertyId });
        res.status(200).json(newPhoto);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.addPhoto = addPhoto;
const getAllPhotos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const photos = yield Photo.findAll();
        res.json(photos);
    }
    catch (error) {
        res.status(500).json({ error: "Cannot find Images" });
    }
});
exports.getAllPhotos = getAllPhotos;
const getPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { photoId } = req.params;
    try {
        const photo = yield Photo.findByPk(photoId);
        if (!photo)
            return res.status(500).json(" Cannot find Photo ");
        res.status(200).json(photo);
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getPhoto = getPhoto;
