"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PhotoController_1 = require("../../controllers/PhotoController");
const router = (0, express_1.Router)();
router.post("/:propertyId", PhotoController_1.addPhoto);
router.get("/", PhotoController_1.getAllPhotos);
router.get("/:photoId", PhotoController_1.getPhoto);
module.exports = router;
