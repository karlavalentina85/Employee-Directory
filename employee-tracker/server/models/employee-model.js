const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
    {
        firstname: { type: String, required: true },
        lastname: { type: [String], required: true },
        phone: { type: [String], required: true },
        email: { type: [String], required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('employees', Employee)
