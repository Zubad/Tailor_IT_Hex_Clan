import GigsSchema from "../models/gigsModel.js";
import asyncHandler from "express-async-handler";

const Getgigs = asyncHandler(async(req, res)=>{
    const gigs = await GigsSchema.find({})
    res.json(gigs)
})

const getgigbyid = asyncHandler(async(req, res)=>{
    const userid=req.params.userid
    const gigs = await GigsSchema.fing({user: `${userid}`})
    if(gigs){
        res.json(gigs)
    }
    else{
        res.status(404)
        throw new Erorr('gig not foung')
    }
})

const addgig = asyncHandler(async(req, res)=>{
    const {title, categoryOne, categorytwo, serviceType, metadata, searchtag, pkgname, pkgdescription, deliverytime, numofsuits, customization, price, image} = req.body;
    const gig = await GigsSchema.create({
        title, categoryOne, categorytwo, serviceType, metadata, searchtag, pkgname, pkgdescription, deliverytime, numofsuits, customization, price, image
    })
    if(gig){
        res.json(gig)
    }
    else{
        res.status(404)
        throw new Erorr('invalid data')
    }
})

export {Getgigs, getgigbyid, addgig}