"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQL_URI = exports.PORT = exports.JWT_SIGN = void 0;
const functions = require('firebase-functions');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.JWT_SIGN = process.env.JWT_SIGN || functions.config().week17adriantoribe.JWT_SIGN;
exports.PORT = 0;
exports.MYSQL_URI = process.env.MYSQL_URI || functions.config().week17adriantoribe.MYSQL_URI;
//# sourceMappingURL=constants.js.map