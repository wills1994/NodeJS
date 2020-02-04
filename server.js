const express =  require('express');
const bodyParser =  require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

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
    res.status(201).send(
      [
        {error:"",body:"Creado correctament"}
      ]);
 
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

*/