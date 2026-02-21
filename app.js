const express=require("express");
const app=express();
const port=3000;
const cors=require("cors");
const UserRouter=require('./Routes/userRoutes');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/user',UserRouter);



app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
});