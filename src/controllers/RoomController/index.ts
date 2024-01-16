import { Response, Request } from "express";

const db = require("../../model/configDb");

const Property = db.property;

const Room = db.room;

export const addRoom = async (req: Request, res: Response) => {
  const { propertyId } = req.params;
  const { name, size, refundable, payment, bed } = req.body;
  try {
    const property = await Property.findByPk(propertyId);
    if (!property) {
      res.status(404).json({ error: "Property not found" });
      return;
    }
    const newRoom = await Room.create({
      name,
      size,
      refundable,
      payment,
      bed,
      propertyId,
    });
    res.status(200).json(newRoom);
  } catch (error) {
    res.status(500).json("Room Error: " + error);
  }
};

export const getAllRoom = async (req: Request, res: Response) => {
  try {
    const rooms = await Room.findAll();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json("Room Error: " + error);
  }
};

export const getRoom = async (req: Request, res: Response) => {
  const { roomId } = req.params;
  try {
    const rooms = await Room.findByPk(roomId);
    if (!rooms) return res.status(404).json({ message: "Room not found" });
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
