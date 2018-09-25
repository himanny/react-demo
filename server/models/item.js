const mongoose = require('mongoose');
const schema = mongoose.Schema;

//Create Schema
const ItemSchema = new schema({
    duedate:Date,
    name:String

});

module.exports = Item = mongoose.model('item',ItemSchema);