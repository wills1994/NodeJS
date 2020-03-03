const Model = require('./model');

function addMessage(message) {
    const fullMessage = new Model(message);
    fullMessage.save();
}

async function getMessages(filter){

    return new Promise((resolve, reject) => {
        let filterMsg = {};

        if(filter != null){
            filterMsg = {user:filter};
        }
        Model.find(filterMsg)
                .populate("user")
                .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
        });
    });
}
async function updateMessageStore(id,message){
    const foundMessage = await Model.findOne({_id:id});
    foundMessage.message = message;

    const newMsg = await foundMessage.save();
    return newMsg;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id:id
    });
}


module.exports = {
    add:addMessage,
    Getlist:getMessages,
    updateMessageStore,
    removeMessage
}