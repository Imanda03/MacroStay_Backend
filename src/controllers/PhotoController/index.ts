import { Request, Response } from "express";

const db = require("../../model/configDb");

const Property = db.property;

const Photo = db.photo;

export const addPhoto = async (req: Request, res: Response) => {
  const { propertyId } = req.params;
  const { image } = req.body;
  try {
    const property = await Property.findByPk(propertyId);
    if (!property) return res.status(404).json({ error: "Property not found" });
    const newPhoto = await Photo.create({ image, propertyId });
    res.status(200).json(newPhoto);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllPhotos = async (req: Request, res: Response) => {
  try {
    const photos = await Photo.findAll();
    res.json(photos);
  } catch (error) {
    res.status(500).json({ error: "Cannot find Images" });
  }
};

export const getPhoto = async (req: Request, res: Response) => {
  const { photoId } = req.params;
  try {
    const photo = await Photo.findByPk(photoId);
    if (!photo) return res.status(500).json(" Cannot find Photo ");
    res.status(200).json(photo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
