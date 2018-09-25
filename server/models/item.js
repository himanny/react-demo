const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create Schema
const ItemSchema = new schema({
    date:Date,
    name:String

});

module.exports = Item = mongoose.model('item',ItemSchema);