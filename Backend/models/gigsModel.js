import mongoose from 'mongoose'

const gigSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserSchema',
    },
    title:{
        type: String,
        required: true,
    },
    categoryOne:{
        type: String,
        required: true,
    },
    categorytwo:{
        type: String,
        required: true,
    },
    serviceType:{
        type: String,
        required: true,
    },
    metadata:{
        type: String,
        required: true,
    },
    searchtag:[{
        type: String,
        required: true,
    }],
    pkgname:[{
        name:{
            type: String,
            required: true,
        }
    }],
    pkgdescription:[{
        description:{
            type: String,
            required: true,
        }
    }],
    deliverytime:[{
        days:{
            type: String,
            required: true,
        }
    }],
    numofpieces:[{
        piecenum:{
            type: String,
            required: true,
        }
    }],
    numofsuits:[{
        suits:{
            type: String,
            required: true,
        }
    }],
    customization:[{
        name:{
            type: Boolean,
            required: true,
        }
    }],
    price:[{
        name:{
            type: Number,
            required: true,
        }
    }],
    image:{
        type: String,
        required: true,
    }
})

const GigsSchema = mongoose.model('Gigs', gigSchema)

export default GigsSchema;