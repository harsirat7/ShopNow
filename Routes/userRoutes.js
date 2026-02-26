const express=require("express");
const userRotuer=express.Router();
const UserAuth=require("../UserBackEnd/Controller/authentication");


userRotuer.post("/checkUser",(req,res)=>{
    UserAuth.checkUser(req,res);
});

userRotuer.get("/checkUserSession",(req,res)=>{
    UserAuth.checkUserSession(req,res);
});


module.exports=userRotuer;