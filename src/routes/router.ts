import express from "express";

const router = express.Router();

router.use("/auth", require("./User"));
router.use("/location", require("./Location"));
router.use("/property", require("./Property"));
router.use("/booking", require("./Booking"));
router.use("/photo", require("./Photo"));
router.use("/room", require("./Room"));

module.exports = router;
