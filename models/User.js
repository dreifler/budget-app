const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    accounts: [AccountSchema]
});

mongoose.model('users', userSchema);