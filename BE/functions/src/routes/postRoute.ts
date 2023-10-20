import { Router } from "express";
import { createPostController, deletePostController, getPostsController, updatePostController } from "../controllers/postController";
import whitelist from "../middlewares/whitelist";
import cors from "cors";


export const postRoute = Router();

// postRoute.get('/testPost', (req, res) => {
//     const tokenCookie = req.cookies['loginCookie'];
//     const tokenCookieRefresh = req.cookies['loginCookieRefresh'];

//     res.status(200).json({
//         message:`Token Cookie: ${tokenCookie} | Token Refresh: ${tokenCookieRefresh}`
//     });
// });

postRoute.options('/create', cors(whitelist.clientOptionsGlobal));
postRoute.options('/retrieve', cors(whitelist.clientOptionsGlobal));
postRoute.options('/update/:id', cors(whitelist.clientOptionsGlobal));
postRoute.options('/delete/:id', cors(whitelist.clientOptionsGlobal));

postRoute.post('/create', cors(whitelist.clientOptionsGlobal), createPostController);
postRoute.get('/retrieve', cors(whitelist.clientOptionsGlobal), getPostsController);
postRoute.patch('/update/:id', cors(whitelist.clientOptionsGlobal), updatePostController);
postRoute.delete('/delete/:id', cors(whitelist.clientOptionsGlobal), deletePostController);
