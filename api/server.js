require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express()
const routes = require("./routes/routes")


app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
  }));
  
// app.get("/",(req, res)=>{
//      res.json("hanji")
// })
app.use(routes)

const start = async()=>{
    try {
        
        const connection = await mongoose.connect(process.env.MONGODB_URL)
        if(connection) app.listen(5000, ()=> console.log("server is live"))
        
    } catch (error) {
        console.log(error)
    }
}

start()


