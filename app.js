const express=require("express");
const app=express();
const port=3000;
const cors=require("cors");
const UserRouter=require('./Routes/userRoutes');
const session=require("express-session");


app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// user session
app.use(session({
    secret:"userId",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*5
    },
}));





app.use('/user',UserRouter);



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});