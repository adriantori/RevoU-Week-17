import express from 'express';
import globalMiddleware from './middlewares'
import * as functions from 'firebase-functions';
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import http, { Server } from 'http';

import { userRoute } from './routes/userRoute';
import { postRoute } from './routes/postRoute';
import checkLoginCookie from './middlewares/checkLoginCookie';
import cors from 'cors';
import whitelist from './middlewares/whitelist';

const app = express();
const server: Server = http.createServer(app);

globalMiddleware(app);

app.use(userRoute);

app.get('/', (req, res) => {
    const tokenCookie: string = req.cookies['loginCookie'];
    const tokenCookieRefresh = req.cookies['loginCookieRefresh'];

    res.status(200).json({
        message:`Token Cookie: ${tokenCookie} | Token Refresh: ${tokenCookieRefresh}`
    });
});

// app.use(cors(whitelist.clientOptionsGlobal), checkLoginCookie)

app.use(postRoute);

let port: number;

server.listen(0, () => {
  const address = server.address();
  if (address && typeof address !== 'string') {
    port = address.port;
    console.log(`Server is running on port ${port}`);
  } else {
    console.error('Server address is not available.');
  }
});

export const week_17_adriantori = functions.https.onRequest(app);