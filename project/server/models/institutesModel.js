const mongoose = require('mongoose');

const institutesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
},
{timestamps: true}
)

const Theatre = mongoose.model("institutes", institutesSchema);
module.exports = institutes;