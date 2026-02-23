const pool=require("../../DataBase/userConnectitvity");


const authenticateUser ={
    login:(data,callback)=>{
        const q=`select id,password from usersinfo where email='${data.userMail}' or number='${data.userNumber}'`;
        pool.query(q,callback);
    },
}

module.exports=authenticateUser;