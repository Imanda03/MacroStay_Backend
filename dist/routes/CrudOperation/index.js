"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CrudControllers_1 = require("../../controllers/CrudControllers");
const router = (0, express_1.Router)();
router.get("/", CrudControllers_1.crudOperation);
module.exports = router;
