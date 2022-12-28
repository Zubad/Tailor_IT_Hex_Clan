import mongoose from 'mongoose'

const ProfileSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserSchema',
    },
    image:{
        type: String,
        required: true,
    },
    balance:{
        type: String,
        
    },
    SkillsCategory:{
        type: String,
        required: true,
    },
    skill:{
        type: String,
        required: true,
    }
})

const UserProfileSchema = mongoose.model('Profile', ProfileSchema)

export default UserProfileSchema;