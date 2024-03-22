const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true },
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: String,
    role: {
        type: String,
        default: "Visitor"
    }
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel