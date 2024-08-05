const express = require("express");
const colors =require("colors");
const dotenv =require("dotenv").config();
const morgan =require("morgan");
const rootroute = require("./routes/rootroute");
const connectDB = require("./config/db")

const PORT = process.env.PORT || 6000 || 8000;
const app = express();


app.get("/",(req,res)=>{
    res.send("api is working");
});

app.use("/fashiontrends",rootroute);
 connectDB()
app.listen(PORT,()=>{
 console.log(`server is running on https://localhost:${PORT}`.bgBlue.white);
});