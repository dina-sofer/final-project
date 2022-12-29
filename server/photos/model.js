const mongoose = require('mongoose');

// photo - סכמה ל
let photoSchema = new mongoose.Schema({
    path: { type: String, required: true },
    v: { type: Boolean, default: false },
    x: { type: Boolean, default: false },
    vx: { type: Boolean, default: false },
});

module.exports = mongoose.model('photo', photoSchema);