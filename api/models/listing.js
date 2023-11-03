import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    regularPrice:{
        type: Number,
        required: true
    },
    discontedPrice:{
        type: Number,
        required: true
    },
    bathRoom:{
        type: Number,
        required: true
    },
    bedRoom:{
        type: Number,
        required: true
    },
    furnished:{
        type: Boolean,
        required: true
    },
    parking:{
        type: Boolean,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    offer:{
        type: String,
        required: true
    },
    imageUrls:{
        type: Array,
        required: true
    },
    userRef:{
        type: String,
        required: true
    }
},{ timestamps: true })

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;