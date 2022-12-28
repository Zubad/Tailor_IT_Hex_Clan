import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'

const app = express()

dotenv.config()
connectDB();
app.get('/', (req, res)=>{
    res.send("Api is running")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("the server is running at port", PORT))