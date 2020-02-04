const express =  require('express');
const bodyParser =  require('body-parser');
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
app.use('/app', express.static('public'));
/*
app.use('/', function(req, resp){
    resp.send("hola");
});
*/

router.get("/message", function(req, res){
  console.log(req.headers);
    
  res.header({
      "custom-header": "Nuestro valor predeterminado"
  });
  res.send("peticion de get");
});
/*
router.post("/", function(req, res){
    res.send("Mensaje añadido "+ req.body.text+"  desde post)");
  });*/

router.patch("/",function(req, res){
    res.send("peticion de patch");
  });

router.post("/message",function(req, res){
   // console.log(req.body);
   // console.log(req.query);
    //res.send("Mensaje añadido hola "+ req.body.text+" desde post)");
  
      if(req.query.error == "ok"){
        response.error(req,res,'Error simulado',501,'Es un simulacion de error'); 
      }else{
        response.success(req,res,'Lista de Messages',201); 
      }
  });

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