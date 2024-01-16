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
exports.login = exports.register = void 0;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize_1 = require("sequelize");
const db = require("../../model/configDb");
const User = db.user;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, city } = req.body;
        // Check if the user with the given email or username already exists
        const existingUser = yield User.findOne({
            where: {
                [sequelize_1.Op.or]: [{ email }, { username }],
            },
        });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with the provided email or username",
            });
        }
        // Hash the password
        const salt = yield bcrypt.genSalt(10);
        const hashedPassword = yield bcrypt.hash(password, salt);
        // Create a new user
        const newUser = yield User.create({
            username,
            email,
            city,
            password: hashedPassword,
        });
        res
            .status(201)
            .json({ message: "User registered successfully", user: newUser });
    }
    catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Find the user by email
        const user = yield User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "Invalid email " });
        }
        // Check if the password is correct
        const passwordMatch = yield bcrypt.compare(password, user.password);
        console.log(passwordMatch);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        // Generate a JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JSON_SECRET, {
            expiresIn: "24h",
        });
        res.status(200).json({ message: "Login successful", token });
    }
    catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.login = login;
