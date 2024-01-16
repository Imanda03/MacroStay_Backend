import { Router } from "express";
import {
  addPhoto,
  getAllPhotos,
  getPhoto,
} from "../../controllers/PhotoController";

const router = Router();

router.post("/:propertyId", addPhoto);
router.get("/", getAllPhotos);
router.get("/:photoId", getPhoto);

module.exports = router;
