const mongoose = require('mongoose');

// define schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // no two users can have same username
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String, // store image URL
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    followers: {
        type: [mongoose.Schema.Types.ObjectId], // array of user IDs
        ref: "User",
        default: []
    },
    following: {
        type: [mongoose.Schema.Types.ObjectId], // array of user IDs
        ref: "User",
        default: []
    }
}, { timestamps: true }); // automatically adds createdAt and updatedAt

// create model
const User = mongoose.model('User', userSchema);

module.exports = User;
