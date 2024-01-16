import { Request, Response, Router } from "express";
import {
  addBooking,
  getAllBooking,
  getBooking,
} from "../../controllers/BookingControllers";
const router = Router();

router.post("/:userId/:roomId", addBooking);
router.get("/:userId", getBooking);
router.get("/", getAllBooking);

module.exports = router;
