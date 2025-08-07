import express from 'express';
import { getpublishedcreations, getusercreations, tooglelikecreations } from '../controllers/usercontroller.js';
import { auth } from '../middlewares/auth.js';


const userRouter=express.Router();

userRouter.get('/get-user-creations',auth,getusercreations)
userRouter.get('/get-published-creations',auth,getpublishedcreations)
userRouter.post('/toggle-like-creation',auth,tooglelikecreations)

export default userRouter;