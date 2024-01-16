import { Router } from "express";
import {
  addLocation,
  getAllLocation,
  getLocation,
  modifyLocation,
  deleteLocation,
} from "../../controllers/LocationController";

const router = Router();

router.post("/", addLocation);
router.get("/", getAllLocation);
router.get("/:id", getLocation);
router.put("/:locationId", modifyLocation);
router.delete("/:locationId", deleteLocation);

module.exports = router;
