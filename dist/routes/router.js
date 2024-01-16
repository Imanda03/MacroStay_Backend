"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use("/auth", require("./User"));
router.use("/location", require("./Location"));
router.use("/property", require("./Property"));
router.use("/booking", require("./Booking"));
router.use("/photo", require("./Photo"));
router.use("/room", require("./Room"));
module.exports = router;
