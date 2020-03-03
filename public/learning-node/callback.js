/*

el callback = es el parámetro que se va a ejecutar después
*/
const asyncCallback = function (cb) {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        // Concepto Error First Callback: 
        return cb(null, 'Hola mundo');
      } else {
        cb(new Error('Hello Error'));
      }
    }, 2000)
  }

  //cuando un callback tiene un error lo que 
//vamos a enviar como primer párametro es el error.
function asyncCall(){
asyncCallback((err, msg) => {
    // Verificar si existe el error
    if (err) {
      console.log('Error', err);
    } else {
      console.log('mensage', msg);
    }
  })
}
module.exports = {asyncCall};  