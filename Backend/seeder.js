import mongoose from "mongoose";
import users from "./data/userData.js";
import dotenv from 'dotenv'
import profile from './data/profileData.js'
import UserSchema from './models/userModel.js'
import UserProfileSchema from './models/profileModel.js'
import GigsSchema from './models/gigsModel.js'
import connectDB from './config/db.js'


dotenv.config()

connectDB()
const importData = async()=>{
    try {
        await GigsSchema.deleteMany()
        await UserSchema.deleteMany()
        const createUser = await UserSchema.insertMany(users)
        const admin = createUser[1]._id
        const sampleGig = gigs.map(g=>{
            return {...g, user:admin}
        })
        const sampleProfile = profile.map(p=>{
            return {...p, user:admin}
        })

        
    } catch (error) {
        
    }
}