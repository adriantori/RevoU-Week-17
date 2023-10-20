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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePasswordUserService = exports.loginUserService = exports.registerUserService = void 0;
const userDao_1 = require("../dao/userDao");
const bcrypt_1 = __importDefault(require("bcrypt"));
function registerUserService(email, username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            const user = yield (0, userDao_1.registerUser)(email, username, hashedPassword);
            return user;
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
exports.registerUserService = registerUserService;
function loginUserService(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield (0, userDao_1.loginUser)(username);
            if (user) {
                const isPasswordCorrect = yield bcrypt_1.default.compare(password, user.user_pass);
                if (isPasswordCorrect) {
                    return user;
                }
            }
            return null;
        }
        catch (error) {
            console.log('error login service: ', error.message);
            throw new Error(error.message);
        }
    });
}
exports.loginUserService = loginUserService;
function updatePasswordUserService(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            const user = yield (0, userDao_1.updatePasswordUser)(email, hashedPassword);
            if (user && user.user_pass) {
                // Compare the provided password with the hashed password
                const isPasswordCorrect = yield bcrypt_1.default.compare(password, user.user_pass);
                if (isPasswordCorrect) {
                    return user; // Password is correct, return the user
                }
            }
            return null; // User not found or incorrect password
        }
        catch (error) {
            console.log('Error updating password:', error.message);
            throw new Error('An error occurred while updating the password');
        }
    });
}
exports.updatePasswordUserService = updatePasswordUserService;
//# sourceMappingURL=userService.js.map