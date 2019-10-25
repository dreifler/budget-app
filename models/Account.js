const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    accountName: String,
    type: String,
    amount: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateCreated: Date
});

mongoose.model('accounts', accountSchema);