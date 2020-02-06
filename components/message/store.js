const db = require("mongoose");
const Model = require('./model');

db.Promise = global.Promise;
const options = {
    keepAlive: 1,
    useUnifiedTopology: true,
    useNewUrlParser: true,
};
db.connect('mongodb+srv://willy:prueba1234@cluster0-02ibv.mongodb.net/telegram?retryWrites=true&w=majority', options)
    .then(() =>console.log('DB connected'))
    .catch((err) => {
        console.log(err);
    });

function addMessage(message) {
    const fullMessage = new Model(message);
    fullMessage.save();
}

async function getMessages(){
    const fullMessage = await Model.find();
    return fullMessage;
}

module.exports = {
    add:addMessage,
    Getlist:getMessages
}