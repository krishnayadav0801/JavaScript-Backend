const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    imageURL: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: false
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    comments: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
            text: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ]
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
