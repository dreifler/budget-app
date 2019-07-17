const mongoose = require('mongoose');
const { Schema } = mongoose;
const AccountSchema = require('./Account');

const accountsSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    accounts: [AccountSchema]
});

mongoose.model('accounts', accountsSchema);