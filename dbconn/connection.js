const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:9999/test', {useNewUrlParser: true});

module.exports = mongoose;