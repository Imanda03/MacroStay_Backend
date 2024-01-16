"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PropertyController_1 = require("../../controllers/PropertyController");
const router = (0, express_1.Router)();
router.post("/:locationId", PropertyController_1.addProperty);
router.get("/", PropertyController_1.getAllProperty);
router.get("/:propertyId", PropertyController_1.getProperty);
module.exports = router;
