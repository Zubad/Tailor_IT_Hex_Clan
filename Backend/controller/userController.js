import asyncHandler from "express-async-handler";
import UserSchema from "../models/userModel.js";
import generateToken from "../utills/jsonwebtokens.js";


// authUser, getUserProfile, registerUser

const authUser = asyncHandler(async(req, res)=>{
    const {email,password} = req.body
    const user = await UserSchema.find({email})
    if(user && (await user.password === password)){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isBuyer:user.isBuyer,
            token:generateToken(user._id),
    })
    }else{
        res.status(400)
        throw new Error('in valid user email or password')
    }
})
const registerUser = asyncHandler(async(req, res)=>{
    const {name, email, password, buyer} = req.body
    const userExit = await UserSchema.findOne({email})
    if(userExit){
        res.status(400)
        throw new Error('user already Exit')
    }
    const user = await UserSchema.create({
        name, email, password, buyer
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isBuyer:user.buyer,
            token:generateToken(user._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

const getUserProfile = asyncHandler(async(req, res)=>{
    const user = await UserSchema.findById(req.user._id)
    if(user){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isBuyer:user.buyer,

        })
    }else{
        res.status(400)
        throw new Error('User not Found')
    }
})

export {authUser, registerUser, getUserProfile}