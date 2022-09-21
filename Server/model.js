
const mongoose = require('mongoose');

const users = new mongoose.Schema({
    id: Number,
    count: Number
});

module.exports = mongoose.model('count', users)