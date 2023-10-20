"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.week_17_adriantori = void 0;
const express_1 = __importDefault(require("express"));
const middlewares_1 = __importDefault(require("./middlewares"));
const functions = __importStar(require("firebase-functions"));
const http_1 = __importDefault(require("http"));
const userRoute_1 = require("./routes/userRoute");
const postRoute_1 = require("./routes/postRoute");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
(0, middlewares_1.default)(app);
app.use(userRoute_1.userRoute);
app.get('/', (req, res) => {
    const tokenCookie = req.cookies['loginCookie'];
    const tokenCookieRefresh = req.cookies['loginCookieRefresh'];
    res.status(200).json({
        message: `Token Cookie: ${tokenCookie} | Token Refresh: ${tokenCookieRefresh}`
    });
});
// app.use(cors(whitelist.clientOptionsGlobal), checkLoginCookie)
app.use(postRoute_1.postRoute);
let port;
server.listen(0, () => {
    const address = server.address();
    if (address && typeof address !== 'string') {
        port = address.port;
        console.log(`Server is running on port ${port}`);
    }
    else {
        console.error('Server address is not available.');
    }
});
exports.week_17_adriantori = functions.https.onRequest(app);
//# sourceMappingURL=index.js.map