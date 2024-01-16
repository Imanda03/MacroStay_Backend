"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./model/configDb");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.APP_API || 5050;
app.get("/", (req, res) => {
    res.send("Express API Server is up and running!");
});
app.use("/api", require("./routes/router"));
app.listen(port, () => {
    console.log(`Server is running at ${port} :: http://localhost:${port}`);
});
