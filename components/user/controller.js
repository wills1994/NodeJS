const store = require('./store');

function addUser(name){

    if(!name){
        return Promise.reject('invalid name');
    }
    const user = {
        name
    };
    return store.add(user);
    
}
function getChats() {
    return store.list();
}

module.exports = {
    addUser,
    getChats
}