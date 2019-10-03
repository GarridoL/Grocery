const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/grocery', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected!")
});

var shoppingSchema = new mongoose.Schema({

    item: {
        type: String
    },

    quantity: {
        type: Number
    },

    priority: {
        type: Number
    }

});

module.exports = mongoose.model('Shop', shoppingSchema);