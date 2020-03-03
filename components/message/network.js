const express =  require('express');
const multer = require('multer');
const path = require('path');
const response = require('../../network/response');
const router = express.Router();
const controller = require('./controller');
const config = require('../../config');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'public/'+config.filesRoute+'//')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })

const upload = multer({
    storage: storage
});


//http://localhost:3000/message?chat=5e4c285d8379792f54c3ac44

/*
{
  "error": "",
  "message": [
    {
      "_id": "5e4c2c5462250140a88c2a15",
      "chat": "5e4c285d8379792f54c3ac44",
      "user": {
        "_id": "5e4c20062a03370944489693",
        "name": "Wilson",
        "__v": 0
      },
      "message": "Hola Mundo",
      "date": "2020-02-18T18:26:28.392Z",
      "__v": 0
    },
    {
      "_id": "5e4c2df73ff91b4380d41c21",
      "chat": "5e4c285d8379792f54c3ac44",
      "user": {
        "_id": "5e4c200c2a03370944489694",
        "name": "Nelson",
        "__v": 0
      },
      "message": "Hola Wilson",
      "date": "2020-02-18T18:33:27.829Z",
      "__v": 0
    }
  ]
}
*/
    router.get("/",function(req, res){
        const filter = req.query.user || null;

        controller.getList(filter)
            .then((messageList) => {
                response.success(req,res,messageList,200); 
            })
            .catch( e => {
                response.error(req,res,'Error',500,e); 
            });
    });
/*
http://localhost:3000/message/
{	
	"user": "5e4c20062a03370944489693",
	"chat": "5e4c285d8379792f54c3ac44",
	"message": "Hola Mundo"
}

RETURN:
{
  "error": "",
  "message": [
    {
      "_id": "5e4c2c5462250140a88c2a15",
      "chat": "5e4c285d8379792f54c3ac44",
      "user": {
        "_id": "5e4c20062a03370944489693",
        "name": "Wilson",
        "__v": 0
      },
      "message": "Hola Mundo",
      "date": "2020-02-18T18:26:28.392Z",
      "__v": 0
    }
  ]
}
   
   
   */ 
    router.post("/",upload.single('file'),function(req, res){
        res.header({
            "custom-header": "Nuestro valor predeterminado"
        });
        controller.addMessages(req.body.chat,req.body.user,req.body.message, req.file)
            .then((fullMessage) => {
                response.success(req,res,fullMessage,201); 
            })
            .catch( e => {
                response.error(req,res,'Información inválida',400,'Error en el controlador'); 
            });
    });

    router.patch("/:id",(req,res) =>{
        controller.updateMessage(req.params.id,req.body.message)
        .then((data) => {
            response.success(req,res,data,200);
        })
        .catch(e =>{
            response.error(req,res,'Not found Message',400,e);
        });
    });
    router.delete('/:id',function (req, res) {
        controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req,res,`Usuario ${req.params.id} eliminado`, 200);
            //response.success(req,res,'Usuario eliminado', 200);
        })
        .catch(e => {
            response.error(req,res,'Error interno', 500, e);
        });
    });
module.exports= router;