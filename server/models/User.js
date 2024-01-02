const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    password: String,
    role: {
        type: String,
        default: "Visitor"
    }
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel