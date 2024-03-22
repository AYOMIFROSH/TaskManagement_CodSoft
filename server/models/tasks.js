const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
});

const taskModel = mongoose.model("tasks", taskSchema);
module.exports = taskModel;
