const { timeStamp } = require('console')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const noteSchema = new Schema({
    title:{
        type:String, 
        required: true
    },
    content:{
        type:String,
        required:true
    },
    user_id: {
        type: String,
        required: true
    }
}, {timeStamps : true})

module.exports = mongoose.model('Note', noteSchema)