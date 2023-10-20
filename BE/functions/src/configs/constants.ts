const functions = require('firebase-functions');
import dotenv from "dotenv";
dotenv.config();

export const JWT_SIGN = process.env.JWT_SIGN || functions.config().week17adriantoribe.JWT_SIGN;
export const PORT = 0;
export const MYSQL_URI = process.env.MYSQL_URI || functions.config().week17adriantoribe.MYSQL_URI