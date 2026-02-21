const mySQL=require("mysql2");

const userPool=mySQL.createPool({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"userecommerce",
    queueLimit:true,
    connectionLimit:10,
    waitForConnections:true
});

module.exports=userPool;