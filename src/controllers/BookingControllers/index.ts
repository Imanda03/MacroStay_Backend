import { Response, Request } from "express";

const db = require("../../model/configDb");

const Users = db.user;

const Room = db.room;

const Booking = db.booking;

export const addBooking = async (req: Request, res: Response) => {
  const { userId, roomId } = req.params;
  const { hotelName, roomName, price, checkInDate, checkOutDate } = req.body;
  try {
    const user = await Users.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User Not Found" });

    const room = await Room.findByPk(roomId);
    if (!room) return res.status(404).json({ error: "Room Not Found" });

    if (room) {
      if (room.available) {
        room.available = 0;
        await Room.save;
      } else {
        return res.status(404).json({ error: "Room not available" });
      }
    }

    const newBooking = await Booking.create({
      hotelName,
      roomName,
      price,
      checkInDate,
      checkOutDate,
      userId,
      roomId,
    });
    res.status(200).json(newBooking);
  } catch (error) {
    console.log(error);
    res.status(500).json("Room Error: " + error);
  }
};

export const getBooking = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const booking = await Booking.findByPk(userId);
    if (!booking) return res.status(400).json({ error: "No booking yet!!" });
    res.status(200).json(booking);
  } catch (error) {}
};

export const getAllBooking = async (req: Request, res: Response) => {
  try {
    const booking = await Booking.findAll();
    res.status(200).json(booking);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "No Booking yet" });
  }
};
