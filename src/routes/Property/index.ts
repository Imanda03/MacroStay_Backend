import { Router } from "express";
import {
  addProperty,
  getAllProperty,
  getLocationProperty,
  getProperty,
} from "../../controllers/PropertyController";

const router = Router();

router.post("/:locationId", addProperty);
router.get("/", getAllProperty);
router.get("/:propertyId", getProperty);
router.get("/ofHotel/:locationId", getLocationProperty);

module.exports = router;
