"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const userController_1 = require("../controllers/userController");
const whitelist_1 = __importDefault(require("../middlewares/whitelist"));
const loginLimiter_1 = __importDefault(require("../middlewares/loginLimiter"));
exports.userRoute = (0, express_1.Router)();
exports.userRoute.options('/register', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.userRoute.options('/login', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.userRoute.options('/logout', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.userRoute.options('/reset-password', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.userRoute.options('/confirm-reset', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.userRoute.post('/register', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), userController_1.registerUserController);
exports.userRoute.post('/login', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), loginLimiter_1.default, userController_1.loginUserController);
exports.userRoute.get('/logout', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), userController_1.logoutUserController);
exports.userRoute.post('/reset-password', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), userController_1.generateResetUserController);
exports.userRoute.post('/confirm-reset', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), userController_1.resetPasswordController);
//# sourceMappingURL=userRoute.js.map