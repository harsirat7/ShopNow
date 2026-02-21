const authObject=require("../Model/authentication");

class Auth{
    checkUser(req,res){

        let data={}

        if(req.body.userMailAddress==undefined){
             data={
                userMail:null,
                userNumber:req.body.userPhoneNumber,
                userPassword:req.body.currentPassword,
            };
        }
        else{
             data={
                userMail:req.body.userMailAddress,
                userNumber:null,
                userPassword:req.body.currentPassword,
            };
        };



            authObject.login(data,(err,result)=>{
            if(err){
                res.json({result:"error"});
            }
            else{
                if(result.length>0){
                    res.json({userInfo:result});
                }
                else{
                    res.json({user:"User not found"});
                }
            }
        });
        
    };



};


module.exports=new Auth;