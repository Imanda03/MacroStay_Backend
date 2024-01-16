import { Router } from "express";
import { addRoom, getAllRoom, getRoom } from "../../controllers/RoomController";

const router = Router();

router.post("/:propertyId", addRoom);
router.get("/", getAllRoom);
router.get("/:roomId", getRoom);

module.exports = router;
