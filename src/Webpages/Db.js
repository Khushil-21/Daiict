
const mg = require("mongoose");

const doctors = new mg.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile_number: Number,
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
});

module.exports = mg.models.doctor || mg.model("doctor",doctors)