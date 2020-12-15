const { Schema } = require("../dbconn/connection");
const mongoose = require("../dbconn/connection");

var schema = new Schema({
    name: String,
    living: Boolean,
    age: Number
})

const Cat = mongoose.model('Cat', schema);

module.exports = Cat;


