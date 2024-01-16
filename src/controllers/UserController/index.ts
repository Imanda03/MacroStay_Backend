import { Response, Request } from "express";

const db = require("../../model/configDb");

const Users = db.users;

export const addUser = async (req: Request, res: Response) => {
  try {
    // console.log(db.users);
    const data = await Users.create({
      name: "Test",
      email: "test2@gmail.com",
      gender: "Male",
    });

    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
