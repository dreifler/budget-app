const mongoose = require('mongoose');
const { Schema } = mongoose;
const FighterSchema = require('./Fighters');

const userSchema = new Schema({
    googleId: String,
    credits: { type: Number, default: 0 },
    gymName: { type: String, default: "Gym Name" },
    fighters: [FighterSchema]
});

mongoose.model('users', userSchema);