import JobSchema from "../models/jobModel";
import asyncHandler from "express-async-handler";
import UserProfileSchema from "../models/profileModel";

const Addjob = asyncHandler(async(req, res)=>{
    const {id, maintitle, category, category2, days, price} = req.body;
    const job = await JobSchema.create({id, maintitle, category, category2, days, price})
    if(job){
        res.json(job)
    }else{
        res.status(400)
        throw new Error('invalid data')
    }
})

const getjobbyuser = asyncHandler(async(req, res)=>{
    const userid = req.params.id
    const job = await JobSchema.find({id:`{userid}`})
    if(job){
        res.json(job)
    }else{
        res.status(400)
        throw new Error("Job not found")
    }
})

export {Addjob, getjobbyuser}
   