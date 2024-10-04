const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    full_name: String,
    email: {
        type: String,
        unique: true 
    },
    password: String,
    confirm_password: String
}, 
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema)

module.exports = User