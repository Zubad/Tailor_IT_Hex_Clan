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
    const job = await JobSchema.find({id:`${userid}`})
    if(job){
        res.json(job)
    }else{
        res.status(400)
        throw new Error("Job not found")
    }
})

const BuyerRelatedJob = asyncHandler(async(req, res)=>{
    const userid = req.params.id;
    const user = await profile.findOne({id:`${userid}`})
    if(user){
        const category = user.SkillsCategory;
        const skill = user.skill
        const jobs = await JobSchema.find({category: `${category}`, category2: `${skill}`})
        if(jobs){
            res.json(jobs)
        }else{
            res.status(400)
            throw new Error('data not found')
        }
    }
})

export {Addjob, getjobbyuser, BuyerRelatedJob}
   