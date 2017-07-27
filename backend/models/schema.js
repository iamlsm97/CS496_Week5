const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  nickname: String, // primary key
}, { versionKey: false });

module.exports = {
  User: mongoose.model('user', userSchema),
};
