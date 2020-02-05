const store = require('./store');

function getList(){
    return new Promise((resolve,reject) => {
        resolve(store.Getlist());
    });
}

function addMessages(user,message){
    return new Promise((resolve,reject) =>{
        if(!user || !message){
            console.error('[messageController] No hay usuario o el mensaje');
            reject('Los datos són incorrectos');
            return false;
        }
        const fullMessage ={
            user:user,
            message:message,
            date:new Date()
        };
        console.log(fullMessage);
        store.add(fullMessage);
        resolve(fullMessage);
    });
    
}

module.exports = {
    addMessages,
    getList
};