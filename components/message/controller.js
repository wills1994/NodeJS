const store = require('./store');
const socket = require('../../socket').socket;
const config = require('../../config');

function getList(filter){
    return new Promise((resolve,reject) => {
        resolve(store.Getlist(filter));
    });
}
function updateMessage(id,message){
    return new Promise(async (resolve,reject) =>{
        if(!id || !message){
            reject("Invalid Data");
            return false;
        }
        const result= await store.updateMessageStore(id,message);
        resolve(result);
    });
}
function addMessages(chat,user,message,file){
    return new Promise((resolve,reject) =>{
        if(!chat || !user || !message){
            console.error('[messageController] No hay usuario o el mensaje');
            reject('Los datos són incorrectos');
            return false;
        }
        let fileUrl = '';
        if (file) {
            fileUrl = config.host +':'+config.port+config.publicRoute+'/'+config.filesRoute+'/' + file.filename;
        }

        const fullMessage ={
            chat:chat,
            user:user,
            message:message,
            date:new Date(),
            file:fileUrl
        };
        console.log(fullMessage);
        store.add(fullMessage);
        socket.io.emit('messages',fullMessage);
        resolve(fullMessage);
    });
    
}
function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if(!id){
            reject('id invalido');
            return false;
        }
        store.removeMessage(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    addMessages,
    getList,
    updateMessage,
    deleteMessage
};