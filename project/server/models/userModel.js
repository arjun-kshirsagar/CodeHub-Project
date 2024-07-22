const mongoose = require('mongoose');

// Define the CodingHandles schema
const codingHandlesSchema = new mongoose.Schema({
    leetCode: {
        type: String,
        required: false
    },
    codeChef: {
        type: String,
        required: false
    },
    codeForces: {
        type: String,
        required: false // Assuming not all users might have a Codeforces account
    }
    // Add other competitive programming platforms as needed
}, { _id: false }); // Set _id to false to prevent creating an id for this subdocument

// Define the User schema
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    },
    userPassword: {
        type: String,
        required: true
    },
    institutionName: {
        type: String,
        required: false // Assuming college name might not be available for all users
    },
    codingHandles: codingHandlesSchema // Use the codingHandles schema
}, { timestamps: true }); // Adding timestamps for creation and update times

module.exports = mongoose.model('User', userSchema);
