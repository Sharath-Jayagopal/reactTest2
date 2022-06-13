// Mongoose connection 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

// Specifying Image Schema
var imageSchema = new mongoose.Schema({
    title: String,
    desc: String,
    imageUrl: String
});

// Specifying model 
let imageModel = new mongoose.model('Image', imageSchema);

module.exports = imageModel