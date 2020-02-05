const list = [];

function getMessages(){
    return list;
}

function addMessage(message){
     list.push(message);
}

module.exports = {
    add:addMessage,
    Getlist:getMessages
    //get
    //update
    //delete
}