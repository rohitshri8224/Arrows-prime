const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    tittle:{
        type :String,
        required: true
    },
    description:{
        type : String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    genre:{
        type : String,
        required:true
    },
    isDeleted: {
        type:Boolen,
        default:false
    }
},{timestamps:true})