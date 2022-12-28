import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserSchema',
    },
    mainTitle:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    category2:{
        type: String,
        required: true,
    },
    days:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    }
})

const JobSchema = mongoose.model('Job', jobSchema)

export default JobSchema;