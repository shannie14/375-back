const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('kteams', userSchema);

module.exports = User;