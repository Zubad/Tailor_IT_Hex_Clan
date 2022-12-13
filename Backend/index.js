import express from 'express'
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.get('/', (req, res)=>{
    res.send("Api is running")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("the server is running at port", PORT))