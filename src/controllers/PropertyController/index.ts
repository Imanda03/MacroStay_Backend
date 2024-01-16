import { Response, Request } from "express";

const db = require("../../model/configDb");

const Location = db.location;

const Property = db.property;

const Photo = db.photo;

const Room = db.room;

export const addProperty = async (req: Request, res: Response) => {
  const { locationId } = req.params;
  const {
    name,
    rating,
    addresses,
    oldPrice,
    newPrice,
    image,
    latitude,
    longitude,
  } = req.body;
  try {
    const location = await Location.findByPk(locationId);
    if (!location) {
      res.status(401).json({ error: "Location not found" });
      return;
    }
    const newProperty = await Property.create({
      name,
      rating,
      addresses,
      oldPrice,
      newPrice,
      image,
      latitude,
      longitude,
      locationId: locationId,
    });
    res.status(200).json(newProperty);
  } catch (error) {
    res.status(500).json("Property. Error" + error);
  }
};

export const getAllProperty = async (req: Request, res: Response) => {
  try {
    const property = await Property.findAll({
      include: [
        { model: Photo, as: "photos" },
        { model: Room, as: "rooms" },
      ],
    });
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProperty = async (req: Request, res: Response) => {
  const { propertyId } = req.params;
  try {
    const property = await Property.findByPk(propertyId, {
      include: [
        { model: Photo, as: "photos" },
        { model: Room, as: "rooms" },
      ],
    });
    if (!property) {
      res.status(404).json({ error: "No such property " });
      return;
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getLocationProperty = async (req: Request, res: Response) => {
  const { locationId } = req.params;
  try {
    const property = await Property.findAll({
      include: [
        { model: Photo, as: "photos" },
        { model: Room, as: "rooms" },
      ],
      where: {
        locationId: locationId,
      },
    });
    if (!locationId) {
      return res.status(400).json({ error: "locationId is required" });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json(error);
  }
};
