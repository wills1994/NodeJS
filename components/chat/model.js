const mongoose = require('mongoose');
const Schema = mongoose.Schema;


/*
post chat
{
	"users": [
		"5e4c20062a03370944489693",
		"5e4c200c2a03370944489694"
	]
}
*/
const mySchema = new Schema({
    users:[{
        type:Schema.ObjectId,
        ref:'User',
    }],
});


const model = mongoose.model('Chat',mySchema);

module.exports = model;