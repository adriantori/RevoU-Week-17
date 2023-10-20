"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const constants_1 = require("../configs/constants");
function checkLoginCookie(req, res, next) {
    const loginCookie = req.cookies['loginCookie'];
    const loginCookieRefresh = req.cookies['loginCookieRefresh'];
    if (!loginCookie && loginCookieRefresh) {
        try {
            const decodedPayload = jsonwebtoken_1.default.decode(loginCookieRefresh);
            // Generate a new token and set it in the loginCookie
            const newToken = jsonwebtoken_1.default.sign(decodedPayload, constants_1.JWT_SIGN);
            res.cookie('loginCookie', newToken, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24,
                path: '/',
                sameSite: 'none',
            });
            // Send the new token in the response
            // res.status(201).json({
            //     message: 'Current session refreshed'
            // })
            next();
            return;
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
            return;
        }
    }
    else if (loginCookie) {
        next();
    }
    else {
        res.status(403).json({
            message: "Please logged in before accessing this API"
        });
        return;
    }
}
exports.default = checkLoginCookie;
//# sourceMappingURL=checkLoginCookie.js.map