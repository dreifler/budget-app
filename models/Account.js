const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    name: String
});

mongoose.model('account', accountSchema);