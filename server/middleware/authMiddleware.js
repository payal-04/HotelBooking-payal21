import { requireAuth } from "@clerk/express";
import User from "../models/User.js"

//Middleware to check if the user is authenticated//

export const protect = async(req,res,next)=>{
   const {userId} = req.auth;
   if(!userId){
    res.json({sucess: false, message: "Not Authenticated"})
   }
   else{
    const user = await User.findById(userId);
    req.user = user;
    next()
   }
}