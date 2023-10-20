"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoute = void 0;
const express_1 = require("express");
const postController_1 = require("../controllers/postController");
const whitelist_1 = __importDefault(require("../middlewares/whitelist"));
const cors_1 = __importDefault(require("cors"));
exports.postRoute = (0, express_1.Router)();
// postRoute.get('/testPost', (req, res) => {
//     const tokenCookie = req.cookies['loginCookie'];
//     const tokenCookieRefresh = req.cookies['loginCookieRefresh'];
//     res.status(200).json({
//         message:`Token Cookie: ${tokenCookie} | Token Refresh: ${tokenCookieRefresh}`
//     });
// });
exports.postRoute.options('/create', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.postRoute.options('/retrieve', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.postRoute.options('/update/:id', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.postRoute.options('/delete/:id', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal));
exports.postRoute.post('/create', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), postController_1.createPostController);
exports.postRoute.get('/retrieve', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), postController_1.getPostsController);
exports.postRoute.patch('/update/:id', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), postController_1.updatePostController);
exports.postRoute.delete('/delete/:id', (0, cors_1.default)(whitelist_1.default.clientOptionsGlobal), postController_1.deletePostController);
//# sourceMappingURL=postRoute.js.map