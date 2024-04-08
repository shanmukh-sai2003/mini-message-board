const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {type: String, required: true},
    author: {type: String, default: "unknown"},
    time: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Message", MessageSchema);
