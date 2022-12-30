import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    isBuyer:{
        type: Boolean,
        default: false,
    },
})

const UserSchema = mongoose.model('User', userSchema)

export default UserSchema;