import { Response, Request } from "express";

const db = require("../../model/configDb");

const Location = db.location;

const Property = db.property;

export const addLocation = async (req: Request, res: Response) => {
  const { place, placeImage, shortDescription } = req.body;
  try {
    const newLocation = await Location.create({
      place,
      placeImage,
      shortDescription,
    });
    res.status(200).json(newLocation);
  } catch (error) {
    res.status(500).json("Location. Error" + error);
  }
};

export const getAllLocation = async (req: Request, res: Response) => {
  try {
    const location = await Location.findAll({
      include: [{ model: Property, as: "properties" }],
    });
    res.json(location);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getLocation = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const location = await Location.findByPk(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const modifyLocation = async (req: Request, res: Response) => {
  const { locationId } = req.params;
  const { place, placeImage, shortDescription } = req.body;
  try {
    const location = await Location.findByPk(locationId);
    if (!location) {
      res.status(404).json({ error: "Location not found" });
      return;
    }
    location.place = place;
    location.placeImage = placeImage;
    location.shortDescription = shortDescription;
    await location.save();

    res.json(location);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteLocation = async (req: Request, res: Response) => {
  const { locationId } = req.params;
  try {
    const location = await Location.findByPk(locationId);
    if (!location) {
      res.status(404).json({ error: "Location not found" });
      return;
    }
    await location.destroy();
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
