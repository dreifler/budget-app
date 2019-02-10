const mongoose = require('mongoose');
const { Schema } = mongoose;

const fighterSchema = new Schema ({
    name: String,
    _user: { type: Schema.Types.ObjectId, ref:"User" }
});

mongoose.model('fighters', fighterSchema);