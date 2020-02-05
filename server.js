const express =  require('express');
const bodyParser =  require('body-parser');
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);

router(app);

app.use('/app', express.static('public'));
/*
app.use('/', function(req, resp){
    resp.send("hola");
});
*/
app.listen(3000);
console.log(" la aplication esta escuchando en el port http://localhost::3000");

/*
App - insomnia - api rest
npm i express => install express
node server => Start server

// Instalar
 npm install -g nodemon

// Ejecutar
 nodemon server.js

 npm i body-parser
 
 //mostrar los errores en color
 npm i chalk 

*/