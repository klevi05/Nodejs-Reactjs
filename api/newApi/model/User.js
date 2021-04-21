const mongoose = require('mongoose');


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 4,
            max: 255
        },
        email: {
            type: String,
            require: true,
            max: 255,
            min: 6
        },
        password : {
            type: String,
            require: true,
            max:1024
        },
        date:{
            type: Date,
            default: Date.now
        },
        posts:[{
            name: {
                type: String,
            },
            author: {
                type: String
            },
            kategory: {
                type: String
            }
        }]
    }
)

module.exports = mongoose.model('User', userSchema);