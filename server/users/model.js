const mongoose = require('mongoose');

// user - סכמה ל
let userSchema = new mongoose.Schema({
    type: { type: String, default: 'user' },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    photoDate: { type: Date , default: Date(Date.now) }
});

module.exports = mongoose.model('user', userSchema);