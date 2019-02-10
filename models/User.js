const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 },
    userName: { type: String, default: "Guest" },
});

mongoose.model('users', userSchema);