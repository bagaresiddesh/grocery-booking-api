"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const adminRoues_1 = __importDefault(require("./routes/adminRoues"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Routes
app.use('/admin', adminRoues_1.default);
app.use('/user', userRoutes_1.default);
exports.default = app;
