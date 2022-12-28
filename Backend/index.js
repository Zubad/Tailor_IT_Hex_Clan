import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import gigRoutes from './routes/gigRoutes.js'

const app = express()
app.use(express.json())

dotenv.config()
connectDB();
app.get('/', (req, res)=>{
    res.send("Api is running")
})

app.use('/gig', gigRoutes);
app.use('postjob', jobRoutes);











const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("the server is running at port", PORT))