const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    title: {
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    category:{
        type: String,
        require: true
    },
    weight:{
        type: String,
        require: false
    },
    dimensions:{
        type: String,
        require:false
    },
    quantity:{
        type: Number,
        require: true
    }

})

module.exports=mongoose.model('Product',productSchema)