import express from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import gigRoutes from './routes/gigRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import getJobRoutes from './routes/getJobRoutes.js'
import userRoutes from './routes/userRoutes.js'
import path from 'path'
import uploadRoutes from './routes/uploadRoutes.js';


const app = express()
app.use(express.json())

dotenv.config()
connectDB();
app.get('/', (req, res)=>{
    res.send("Api is running")
})

app.use('/gig', gigRoutes);
app.use('postjob', jobRoutes);
app.use('/getjob', getJobRoutes)
app.use('/user', userRoutes)
app.use('/upload', uploadRoutes);
const __dirname= path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use((req, res, next) => {
    const error = new Error('not found')
    res.status(404)
    next(error);
})

app.use((req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message:err.message,
    })
})











const PORT = process.env.PORT || 5000
app.listen(PORT, console.log("the server is running at port", PORT))