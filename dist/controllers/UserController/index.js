"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const db = require("../../model/configDb");
const Users = db.users;
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log(db.users);
        const data = yield Users.create({
            name: "Test",
            email: "test2@gmail.com",
            gender: "Male",
        });
        res.status(200).json({ message: "User added successfully" });
    }
    catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.addUser = addUser;
